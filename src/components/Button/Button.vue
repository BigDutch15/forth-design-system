<script setup lang="ts">
import { computed } from 'vue'
import type { Size, Variant, ButtonType, ButtonVariant } from '@/types'

interface ButtonProps {
  variant?: Variant
  buttonVariant?: ButtonVariant
  size?: Size
  disabled?: boolean
  loading?: boolean
  type?: ButtonType
  fullWidth?: boolean
  iconLeft?: boolean
  iconRight?: boolean
  iconOnly?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  buttonVariant: 'solid',
  size: 'md',
  disabled: false,
  loading: false,
  type: 'button',
  fullWidth: false,
  iconLeft: false,
  iconRight: false,
  iconOnly: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => {
  const classes = [
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ]

  // Size classes
  const sizeClasses = {
    xs: props.iconOnly ? 'p-1.5' : 'px-2.5 py-1.5 text-xs gap-1.5',
    sm: props.iconOnly ? 'p-2' : 'px-3 py-2 text-sm gap-2',
    md: props.iconOnly ? 'p-2.5' : 'px-4 py-2.5 text-base gap-2',
    lg: props.iconOnly ? 'p-3' : 'px-5 py-3 text-lg gap-2.5',
    xl: props.iconOnly ? 'p-3.5' : 'px-6 py-3.5 text-xl gap-3',
  }

  // Color variants for solid style
  const solidVariants = {
    primary: 'bg-forth-plum-600 text-white hover:bg-forth-plum-700 active:bg-forth-plum-800 focus:ring-forth-plum-500',
    secondary: 'bg-forth-charcoal-600 text-black hover:bg-forth-charcoal-700 active:bg-forth-charcoal-800 focus:ring-forth-charcoal-500',
    success: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800 focus:ring-green-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:ring-red-500',
    warning: 'bg-yellow-600 text-white hover:bg-yellow-700 active:bg-yellow-800 focus:ring-yellow-500',
    info: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:ring-blue-500',
  }

  // Outlined variants
  const outlinedVariants = {
    primary: 'border-2 border-forth-plum-600 text-forth-plum-600 hover:bg-forth-plum-50 active:bg-forth-plum-100 focus:ring-forth-plum-500',
    secondary: 'border-2 border-forth-charcoal-600 text-forth-charcoal-600 hover:bg-forth-charcoal-50 active:bg-forth-charcoal-100 focus:ring-forth-charcoal-500',
    success: 'border-2 border-green-600 text-green-600 hover:bg-green-50 active:bg-green-100 focus:ring-green-500',
    danger: 'border-2 border-red-600 text-red-600 hover:bg-red-50 active:bg-red-100 focus:ring-red-500',
    warning: 'border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-50 active:bg-yellow-100 focus:ring-yellow-500',
    info: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100 focus:ring-blue-500',
  }

  // Ghost variants
  const ghostVariants = {
    primary: 'text-forth-plum-600 hover:bg-forth-plum-50 active:bg-forth-plum-100 focus:ring-forth-plum-500',
    secondary: 'text-forth-charcoal-600 hover:bg-forth-charcoal-50 active:bg-forth-charcoal-100 focus:ring-forth-charcoal-500',
    success: 'text-green-600 hover:bg-green-50 active:bg-green-100 focus:ring-green-500',
    danger: 'text-red-600 hover:bg-red-50 active:bg-red-100 focus:ring-red-500',
    warning: 'text-yellow-600 hover:bg-yellow-50 active:bg-yellow-100 focus:ring-yellow-500',
    info: 'text-blue-600 hover:bg-blue-50 active:bg-blue-100 focus:ring-blue-500',
  }

  // Link variants
  const linkVariants = {
    primary: 'text-forth-plum-600 hover:text-forth-plum-700 underline-offset-4 hover:underline focus:ring-forth-plum-500',
    secondary: 'text-forth-charcoal-600 hover:text-forth-charcoal-700 underline-offset-4 hover:underline focus:ring-forth-charcoal-500',
    success: 'text-green-600 hover:text-green-700 underline-offset-4 hover:underline focus:ring-green-500',
    danger: 'text-red-600 hover:text-red-700 underline-offset-4 hover:underline focus:ring-red-500',
    warning: 'text-yellow-600 hover:text-yellow-700 underline-offset-4 hover:underline focus:ring-yellow-500',
    info: 'text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline focus:ring-blue-500',
  }

  classes.push(sizeClasses[props.size])

  // Apply button variant styles
  if (props.buttonVariant === 'solid') {
    classes.push(solidVariants[props.variant])
  } else if (props.buttonVariant === 'outlined') {
    classes.push(outlinedVariants[props.variant])
  } else if (props.buttonVariant === 'ghost') {
    classes.push(ghostVariants[props.variant])
  } else if (props.buttonVariant === 'link') {
    classes.push(linkVariants[props.variant])
  }

  if (props.fullWidth) {
    classes.push('w-full')
  }

  if (props.iconOnly) {
    classes.push('aspect-square')
  }

  return classes.join(' ')
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<template>
  <button
    :type="type"
    :class="buttonClasses"
    :disabled="disabled || loading"
    :aria-busy="loading"
    :aria-disabled="disabled"
    @click="handleClick"
  >
    <span v-if="loading" class="flex items-center">
      <svg
        class="animate-spin"
        :class="{
          'h-3 w-3': size === 'xs',
          'h-4 w-4': size === 'sm' || size === 'md',
          'h-5 w-5': size === 'lg',
          'h-6 w-6': size === 'xl',
        }"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </span>
    <slot v-if="!loading && iconLeft" name="icon-left" />
    <slot v-if="!loading" />
    <slot v-if="!loading && iconRight" name="icon-right" />
  </button>
</template>
