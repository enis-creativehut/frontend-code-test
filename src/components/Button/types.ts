interface ButtonProps {
  title?: string
  variant: 'primary' | 'secondary' | 'primary-outline' | 'secondary-outline'
  startIcon?: boolean
  callbackFn: () => void
  loading?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export type { ButtonProps }
