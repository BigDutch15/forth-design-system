<script setup lang="ts">
import { computed } from 'vue'
import type { Size } from '@/types'

interface InputProps {
  modelValue?: string | number
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  size?: Size
  error?: string
  label?: string
  required?: boolean
}

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  size: 'md',
  disabled: false,
  readonly: false,
  required: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
}>()

const inputClasses = computed(() => {
  const classes = [
    'w-full rounded-lg border transition-colors',
    'focus:outline-none focus:ring-2 focus:ring-offset-1',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ]

  // Size classes
  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-2.5 py-1.5 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-2.5 text-lg',
    xl: 'px-5 py-3 text-xl',
  }

  classes.push(sizeClasses[props.size])

  if (props.error) {
    classes.push('border-red-500 focus:ring-red-500')
  } else {
    classes.push('border-gray-300 focus:ring-primary-500')
  }

  return classes.join(' ')
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="w-full">
    <label v-if="label" class="block text-sm font-medium text-gray-700 mb-1">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :class="inputClasses"
      @input="handleInput"
      @blur="emit('blur', $event)"
      @focus="emit('focus', $event)"
    />
    <p v-if="error" class="mt-1 text-sm text-red-600">
      {{ error }}
    </p>
  </div>
</template>
