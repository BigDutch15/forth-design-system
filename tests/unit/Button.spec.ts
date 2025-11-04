import { describe, it, expect } from '@jest/globals'
import { mount } from '@vue/test-utils'
import Button from '@/components/Button/Button.vue'

describe('Button', () => {
  it('renders slot content', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Click me',
      },
    })
    expect(wrapper.text()).toBe('Click me')
  })

  it('applies primary variant by default', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Button',
      },
    })
    expect(wrapper.classes()).toContain('bg-primary-600')
  })

  it('applies correct variant class', () => {
    const wrapper = mount(Button, {
      props: {
        variant: 'secondary',
      },
      slots: {
        default: 'Button',
      },
    })
    expect(wrapper.classes()).toContain('bg-secondary-600')
  })

  it('applies correct size class', () => {
    const wrapper = mount(Button, {
      props: {
        size: 'lg',
      },
      slots: {
        default: 'Button',
      },
    })
    expect(wrapper.classes()).toContain('px-5')
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Button',
      },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
      slots: {
        default: 'Button',
      },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('shows loading spinner when loading', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true,
      },
      slots: {
        default: 'Button',
      },
    })
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('applies full width class', () => {
    const wrapper = mount(Button, {
      props: {
        fullWidth: true,
      },
      slots: {
        default: 'Button',
      },
    })
    expect(wrapper.classes()).toContain('w-full')
  })
})
