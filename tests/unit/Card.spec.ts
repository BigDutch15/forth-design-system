import { describe, it, expect } from '@jest/globals'
import { mount } from '@vue/test-utils'
import Card from '@/components/Card/Card.vue'

describe('Card', () => {
  it('renders default slot content', () => {
    const wrapper = mount(Card, {
      slots: {
        default: '<p>Card content</p>',
      },
    })
    expect(wrapper.text()).toContain('Card content')
  })

  it('renders header slot when provided', () => {
    const wrapper = mount(Card, {
      slots: {
        header: '<h3>Card Header</h3>',
        default: '<p>Content</p>',
      },
    })
    expect(wrapper.text()).toContain('Card Header')
  })

  it('renders footer slot when provided', () => {
    const wrapper = mount(Card, {
      slots: {
        default: '<p>Content</p>',
        footer: '<button>Action</button>',
      },
    })
    expect(wrapper.text()).toContain('Action')
  })

  it('applies shadow class', () => {
    const wrapper = mount(Card, {
      props: {
        shadow: 'lg',
      },
      slots: {
        default: 'Content',
      },
    })
    expect(wrapper.classes()).toContain('shadow-lg')
  })

  it('applies border when bordered is true', () => {
    const wrapper = mount(Card, {
      props: {
        bordered: true,
      },
      slots: {
        default: 'Content',
      },
    })
    expect(wrapper.classes()).toContain('border')
  })

  it('applies padding class', () => {
    const wrapper = mount(Card, {
      props: {
        padding: 'lg',
      },
      slots: {
        default: 'Content',
      },
    })
    expect(wrapper.classes()).toContain('p-6')
  })

  it('applies rounded class', () => {
    const wrapper = mount(Card, {
      props: {
        rounded: 'xl',
      },
      slots: {
        default: 'Content',
      },
    })
    expect(wrapper.classes()).toContain('rounded-xl')
  })
})
