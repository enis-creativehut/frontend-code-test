interface IButtonProps {
  title?: string
  variant: string
  startIcon?: boolean
  callback: () => void
  loading?: boolean
  disabled: boolean
}

export type { IButtonProps }
