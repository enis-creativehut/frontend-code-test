import { render, screen, fireEvent } from '@testing-library/react'
import { IButtonProps } from './types'
import Button from './Button'

describe('Button', () => {
  describe('When renders and the button is disabled', () => {
    const mockedProps: IButtonProps = {
      icon: true,
      disabled: true,
      callback: jest.fn(),
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

      expect(mockedProps.callback).not.toHaveBeenCalled()
    })
  })

  describe('When renders and the button is enabled', () => {
    const mockedProps: IButtonProps = {
      disabled: false,
      callback: jest.fn(),
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

      expect(mockedProps.callback).toHaveBeenCalledTimes(1)
    })
  })
})
