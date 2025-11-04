export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type Variant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
export type ButtonVariant = 'solid' | 'outlined' | 'ghost' | 'link'
export type ButtonType = 'button' | 'submit' | 'reset'

export interface BaseComponentProps {
  class?: string
  id?: string
}
