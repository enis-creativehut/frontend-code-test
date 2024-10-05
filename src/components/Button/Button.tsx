import { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { IButtonProps } from './types'
import './Button.styles.css'

function Button({ icon, callback, disabled }: IButtonProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <button
      className={`button-base ${
        disabled ? 'button-disabled' : 'button-primary'
      }`}
      disabled={disabled}
      type="button"
      onClick={callback}
    >
      {icon && (
        <CheckCircleIcon
          aria-label="check-icon"
          className="h-5 w-5"
          aria-hidden="true"
        />
      )}
      <span>Button</span>
    </button>
  )
}

export default Button
