interface ButtonProps {
  title?: string
  variant: string
  startIcon?: boolean
  callbackFn: () => void
  loading?: boolean
  disabled?: boolean
}

export type { ButtonProps }
