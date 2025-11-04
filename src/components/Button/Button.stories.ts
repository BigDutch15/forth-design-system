import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './Button.vue'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
    },
    buttonVariant: {
      control: 'select',
      options: ['solid', 'outlined', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    iconLeft: {
      control: 'boolean',
    },
    iconRight: {
      control: 'boolean',
    },
    iconOnly: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Click me</Button>',
  }),
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Click me</Button>',
  }),
}

export const AllSizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-col gap-4">
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      </div>
    `,
  }),
}

export const AllVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-col gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="info">Info</Button>
      </div>
    `,
  }),
}

export const Loading: Story = {
  args: {
    loading: true,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Loading...</Button>',
  }),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Disabled</Button>',
  }),
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Full Width Button</Button>',
  }),
}

export const ButtonVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Solid Buttons</h3>
          <div class="flex flex-wrap gap-4">
            <Button variant="primary" buttonVariant="solid">Primary</Button>
            <Button variant="secondary" buttonVariant="solid">Secondary</Button>
            <Button variant="success" buttonVariant="solid">Success</Button>
            <Button variant="danger" buttonVariant="solid">Danger</Button>
            <Button variant="warning" buttonVariant="solid">Warning</Button>
            <Button variant="info" buttonVariant="solid">Info</Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Outlined Buttons</h3>
          <div class="flex flex-wrap gap-4">
            <Button variant="primary" buttonVariant="outlined">Primary</Button>
            <Button variant="secondary" buttonVariant="outlined">Secondary</Button>
            <Button variant="success" buttonVariant="outlined">Success</Button>
            <Button variant="danger" buttonVariant="outlined">Danger</Button>
            <Button variant="warning" buttonVariant="outlined">Warning</Button>
            <Button variant="info" buttonVariant="outlined">Info</Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Ghost Buttons</h3>
          <div class="flex flex-wrap gap-4">
            <Button variant="primary" buttonVariant="ghost">Primary</Button>
            <Button variant="secondary" buttonVariant="ghost">Secondary</Button>
            <Button variant="success" buttonVariant="ghost">Success</Button>
            <Button variant="danger" buttonVariant="ghost">Danger</Button>
            <Button variant="warning" buttonVariant="ghost">Warning</Button>
            <Button variant="info" buttonVariant="ghost">Info</Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Link Buttons</h3>
          <div class="flex flex-wrap gap-4">
            <Button variant="primary" buttonVariant="link">Primary</Button>
            <Button variant="secondary" buttonVariant="link">Secondary</Button>
            <Button variant="success" buttonVariant="link">Success</Button>
            <Button variant="danger" buttonVariant="link">Danger</Button>
            <Button variant="warning" buttonVariant="link">Warning</Button>
            <Button variant="info" buttonVariant="link">Info</Button>
          </div>
        </div>
      </div>
    `,
  }),
}

export const WithIcons: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex gap-4 items-center">
          <Button iconLeft>
            <template #icon-left>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </template>
            Icon Left
          </Button>
          
          <Button iconRight>
            Icon Right
            <template #icon-right>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </template>
          </Button>
          
          <Button iconOnly>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Button>
        </div>
        
        <div class="flex gap-4 items-center">
          <Button variant="secondary" buttonVariant="outlined" iconLeft>
            <template #icon-left>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </template>
            Back
          </Button>
          
          <Button variant="success" buttonVariant="ghost" iconOnly>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </Button>
        </div>
      </div>
    `,
  }),
}
