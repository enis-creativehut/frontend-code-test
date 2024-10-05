import { useState } from 'react'
import Spinner from '../Spinner'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { IButtonProps } from './types'
import './Button.styles.css'

function Button({
  title,
  variant,
  startIcon,
  callback,
  loading,
  disabled,
}: IButtonProps) {
  return (
    <button
      className={`button-base ${
        disabled ? 'button-disabled' : `button-${variant ?? 'primary-solid'}`
      }`}
      disabled={disabled || loading}
      type="button"
      onClick={callback}
    >
      {loading && <Spinner />}
      {startIcon && !loading && (
        <CheckCircleIcon
          aria-label="check-icon"
          className="h-5 w-5"
          aria-hidden="true"
        />
      )}
      <span>{title}</span>
    </button>
  )
}

export default Button
