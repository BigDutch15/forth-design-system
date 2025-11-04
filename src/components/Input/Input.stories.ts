import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Input from './Input.vue'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
  args: {
    placeholder: 'Enter text...',
  },
}

export const WithLabel: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'you@example.com',
  },
}

export const Required: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
  args: {
    label: 'Username',
    required: true,
    placeholder: 'Enter username',
  },
}

export const WithError: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
  args: {
    label: 'Email',
    type: 'email',
    error: 'Please enter a valid email address',
    modelValue: 'invalid-email',
  },
}

export const Disabled: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('Disabled value')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
  args: {
    disabled: true,
  },
}

export const AllSizes: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const xs = ref('')
      const sm = ref('')
      const md = ref('')
      const lg = ref('')
      const xl = ref('')
      return { xs, sm, md, lg, xl }
    },
    template: `
      <div class="flex flex-col gap-4">
        <Input v-model="xs" size="xs" placeholder="Extra Small" />
        <Input v-model="sm" size="sm" placeholder="Small" />
        <Input v-model="md" size="md" placeholder="Medium" />
        <Input v-model="lg" size="lg" placeholder="Large" />
        <Input v-model="xl" size="xl" placeholder="Extra Large" />
      </div>
    `,
  }),
}
