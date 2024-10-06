import { render, screen, fireEvent } from '@testing-library/react'
import { ButtonProps } from './types'
import Button from './Button'

describe('Button', () => {
  describe('When renders and the button is disabled', () => {
    const mockedProps: ButtonProps = {
      title: 'test button',
      startIcon: true,
      disabled: true,
      callbackFn: jest.fn(),
      variant: '',
    }

    beforeEach(() => {
      jest.resetAllMocks()

      render(<Button {...mockedProps} />)
    })

    it('Should display the button', () => {
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('Should display the button icon', () => {
      expect(screen.getByLabelText('check-icon')).toBeInTheDocument()
    })

    it('Should not trigger the callback function', () => {
      fireEvent.click(screen.getByText(/Button/i))

      expect(mockedProps.callbackFn).not.toHaveBeenCalled()
    })
  })

  describe('When renders and the button is enabled', () => {
    const mockedProps: ButtonProps = {
      title: 'test button',
      disabled: false,
      callbackFn: jest.fn(),
      variant: '',
    }

    beforeEach(() => {
      jest.resetAllMocks()

      render(<Button {...mockedProps} />)
    })

    it('Should display the button', () => {
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('Should not display the button icon', () => {
      expect(screen.queryByLabelText('check-icon')).not.toBeInTheDocument()
    })

    it('Should trigger the callback function', () => {
      fireEvent.click(screen.getByText(/button/i))

      expect(mockedProps.callbackFn).toHaveBeenCalledTimes(1)
    })
  })

  describe('When the button is loading', () => {
    const mockedProps: ButtonProps = {
      title: 'test button',
      callbackFn: jest.fn(),
      variant: '',
      loading: true,
    }

    beforeEach(() => {
      jest.resetAllMocks()

      render(<Button {...mockedProps} />)
    })

    it('Should display the button', () => {
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('Should display the the loading spinner', () => {
      expect(screen.getByLabelText('loading-spinner-icon')).toBeInTheDocument()
    })

    it('Should not display the checked icon', () => {
      expect(screen.queryByLabelText('check-icon')).not.toBeInTheDocument()
    })

    it('Should not trigger the callback function', () => {
      fireEvent.click(screen.getByRole('button'))

      expect(mockedProps.callbackFn).not.toHaveBeenCalled()
    })
  })
})
