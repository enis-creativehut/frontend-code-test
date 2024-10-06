import { render, screen, fireEvent } from '@testing-library/react'
import { ButtonProps } from './types'
import Button from './Button'

describe('Button', () => {
  describe('When renders', () => {
    describe('and the button is disabled', () => {
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

      it('Should display the button with the icon', () => {
        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.getByLabelText('check-icon')).toBeInTheDocument()
      })

      it('Should not invoke the callback function when the button is disabled', () => {
        fireEvent.click(screen.getByText(/Button/i))

        expect(mockedProps.callbackFn).not.toHaveBeenCalled()
      })
    })

    describe('and the button is enabled', () => {
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

      it('Should display the button without the icon', () => {
        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.queryByLabelText('check-icon')).not.toBeInTheDocument()
      })

      it('Should invoke the callback function', () => {
        fireEvent.click(screen.getByText(/button/i))

        expect(mockedProps.callbackFn).toHaveBeenCalledTimes(1)
      })
    })

    describe('and the button is loading', () => {
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

      it('Should display the button with the loading spinner', () => {
        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(
          screen.getByLabelText('loading-spinner-icon')
        ).toBeInTheDocument()
      })

      it('Should not display the checked icon when loading', () => {
        expect(screen.queryByLabelText('check-icon')).not.toBeInTheDocument()
      })

      it('Should not invoke the callback function when the button is loading', () => {
        fireEvent.click(screen.getByRole('button'))

        expect(mockedProps.callbackFn).not.toHaveBeenCalled()
      })
    })
  })
})
