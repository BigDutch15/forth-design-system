import type { Meta, StoryObj } from '@storybook/vue3'
import Card from './Card.vue'
import Button from '../Button/Button.vue'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    shadow: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
    bordered: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args">
        <p>This is a basic card with default styling.</p>
      </Card>
    `,
  }),
}

export const WithHeaderAndFooter: Story = {
  render: (args) => ({
    components: { Card, Button },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args">
        <template #header>
          <h3 class="text-lg font-semibold">Card Title</h3>
        </template>
        <p class="text-gray-600">
          This card has a header and footer. The content area is flexible and can contain any elements.
        </p>
        <template #footer>
          <div class="flex gap-2">
            <Button size="sm">Action</Button>
            <Button size="sm" variant="secondary">Cancel</Button>
          </div>
        </template>
      </Card>
    `,
  }),
}

export const Bordered: Story = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args">
        <p>This card has a border instead of a shadow.</p>
      </Card>
    `,
  }),
  args: {
    bordered: true,
    shadow: 'none',
  },
}

export const NoPadding: Story = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args">
        <img src="https://via.placeholder.com/400x200" alt="Placeholder" class="w-full" />
        <div class="p-4">
          <h3 class="font-semibold mb-2">Image Card</h3>
          <p class="text-gray-600">Card with no padding for full-width images.</p>
        </div>
      </Card>
    `,
  }),
  args: {
    padding: 'none',
  },
}

export const AllShadows: Story = {
  render: () => ({
    components: { Card },
    template: `
      <div class="grid grid-cols-2 gap-6">
        <Card shadow="none" bordered>
          <p class="font-medium">No Shadow</p>
        </Card>
        <Card shadow="sm">
          <p class="font-medium">Small Shadow</p>
        </Card>
        <Card shadow="md">
          <p class="font-medium">Medium Shadow</p>
        </Card>
        <Card shadow="lg">
          <p class="font-medium">Large Shadow</p>
        </Card>
        <Card shadow="xl">
          <p class="font-medium">Extra Large Shadow</p>
        </Card>
      </div>
    `,
  }),
}
