import { describe, it, expect } from '@jest/globals'
import { mount } from '@vue/test-utils'
import Input from '@/components/Input/Input.vue'

describe('Input', () => {
  it('renders with placeholder', () => {
    const wrapper = mount(Input, {
      props: {
        placeholder: 'Enter text',
      },
    })
    expect(wrapper.find('input').attributes('placeholder')).toBe('Enter text')
  })

  it('renders label when provided', () => {
    const wrapper = mount(Input, {
      props: {
        label: 'Email',
      },
    })
    expect(wrapper.find('label').text()).toContain('Email')
  })

  it('shows required asterisk when required', () => {
    const wrapper = mount(Input, {
      props: {
        label: 'Email',
        required: true,
      },
    })
    expect(wrapper.find('label').text()).toContain('*')
  })

  it('displays error message', () => {
    const wrapper = mount(Input, {
      props: {
        error: 'This field is required',
      },
    })
    expect(wrapper.text()).toContain('This field is required')
  })

  it('emits update:modelValue on input', async () => {
    const wrapper = mount(Input)
    const input = wrapper.find('input')
    await input.setValue('test value')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['test value'])
  })

  it('applies disabled attribute', () => {
    const wrapper = mount(Input, {
      props: {
        disabled: true,
      },
    })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('applies readonly attribute', () => {
    const wrapper = mount(Input, {
      props: {
        readonly: true,
      },
    })
    expect(wrapper.find('input').attributes('readonly')).toBeDefined()
  })

  it('applies correct type attribute', () => {
    const wrapper = mount(Input, {
      props: {
        type: 'email',
      },
    })
    expect(wrapper.find('input').attributes('type')).toBe('email')
  })
})
