import { test, expect } from '@playwright/test'

test.describe('Button Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-button--primary')
  })

  test('should render button', async ({ page }) => {
    const button = page.frameLocator('#storybook-preview-iframe').getByRole('button')
    await expect(button).toBeVisible()
  })

  test('should be clickable', async ({ page }) => {
    const button = page.frameLocator('#storybook-preview-iframe').getByRole('button')
    await button.click()
    await expect(button).toBeVisible()
  })

  test('should display different variants', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-button--all-variants')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const buttons = frame.getByRole('button')
    await expect(buttons).toHaveCount(6)
  })

  test('should display loading state', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-button--loading')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const button = frame.getByRole('button')
    await expect(button).toBeDisabled()
  })
})
