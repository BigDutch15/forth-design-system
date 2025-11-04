import { test, expect } from '@playwright/test'

test.describe('Input Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-input--default')
  })

  test('should render input', async ({ page }) => {
    const input = page.frameLocator('#storybook-preview-iframe').getByRole('textbox')
    await expect(input).toBeVisible()
  })

  test('should accept text input', async ({ page }) => {
    const input = page.frameLocator('#storybook-preview-iframe').getByRole('textbox')
    await input.fill('Test input')
    await expect(input).toHaveValue('Test input')
  })

  test('should display label', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-input--with-label')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const label = frame.getByText('Email Address')
    await expect(label).toBeVisible()
  })

  test('should display error message', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-input--with-error')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const error = frame.getByText('Please enter a valid email address')
    await expect(error).toBeVisible()
  })
})
