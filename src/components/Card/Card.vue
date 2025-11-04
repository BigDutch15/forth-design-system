<script setup lang="ts">
import { computed } from 'vue'

interface CardProps {
  padding?: 'none' | 'sm' | 'md' | 'lg'
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  bordered?: boolean
}

const props = withDefaults(defineProps<CardProps>(), {
  padding: 'md',
  shadow: 'md',
  rounded: 'lg',
  bordered: false,
})

const cardClasses = computed(() => {
  const classes = ['bg-white']

  // Padding classes
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  }

  // Shadow classes
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  }

  // Rounded classes
  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  }

  classes.push(paddingClasses[props.padding])
  classes.push(shadowClasses[props.shadow])
  classes.push(roundedClasses[props.rounded])

  if (props.bordered) {
    classes.push('border border-gray-200')
  }

  return classes.join(' ')
})
</script>

<template>
  <div :class="cardClasses">
    <div v-if="$slots.header" class="mb-4">
      <slot name="header" />
    </div>
    <div>
      <slot />
    </div>
    <div v-if="$slots.footer" class="mt-4">
      <slot name="footer" />
    </div>
  </div>
</template>
