import { useState } from 'react'
import Spinner from '../Spinner'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { ButtonProps } from './types'
import './Button.styles.css'

function Button({
  title,
  variant,
  startIcon,
  callbackFn,
  loading,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={`button button-${variant ?? 'primary'}`}
      disabled={disabled || loading}
      type="button"
      onClick={callbackFn}
    >
      {startIcon && !loading && (
        <CheckCircleIcon
          aria-label="check-icon"
          className="button-icon"
          aria-hidden="true"
        />
      )}
      {loading ? <Spinner /> : <span className="button-text">{title}</span>}
    </button>
  )
}

export default Button
