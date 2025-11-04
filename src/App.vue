<script setup lang="ts">
import { ref } from 'vue'
import Button from './components/Button/Button.vue'
import Input from './components/Input/Input.vue'
import Card from './components/Card/Card.vue'

const inputValue = ref('')
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-4xl mx-auto space-y-8">
      <header>
        <h1 class="text-4xl font-bold text-gray-900 mb-2">Forth Design System</h1>
        <p class="text-gray-600">A modern Vue 3 component library</p>
      </header>

      <Card>
        <template #header>
          <h2 class="text-2xl font-semibold">Button Examples</h2>
        </template>
        <div class="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="info">Info</Button>
        </div>
      </Card>

      <Card>
        <template #header>
          <h2 class="text-2xl font-semibold">Input Examples</h2>
        </template>
        <div class="space-y-4">
          <Input
            v-model="inputValue"
            label="Email Address"
            type="email"
            placeholder="you@example.com"
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
          />
          <Input
            label="Disabled Input"
            disabled
            modelValue="This is disabled"
          />
        </div>
      </Card>

      <Card>
        <template #header>
          <h2 class="text-2xl font-semibold">Card Examples</h2>
        </template>
        <div class="grid grid-cols-2 gap-4">
          <Card shadow="sm" bordered>
            <p class="text-sm">Small shadow with border</p>
          </Card>
          <Card shadow="lg">
            <p class="text-sm">Large shadow</p>
          </Card>
        </div>
      </Card>
    </div>
  </div>
</template>
