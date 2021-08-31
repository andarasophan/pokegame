import { ThemeProvider } from '@emotion/react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import theme from '../styles/theme'
import Button from './Button'
import FormInput from './FormInput'
import LoadingSpinner from './LoadingSpinner'
import Modal from './Modal'

describe('Modal', () => {
  test('should render nothing when props open falsy', () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <Modal />
      </ThemeProvider>
    )
    expect(queryByTestId('modal')).not.toBeInTheDocument()
  })
  test('should render when props open truthy', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Modal open />
      </ThemeProvider>
    )
    getByTestId('modal')
  })
  test('should render children', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Modal open>children</Modal>
      </ThemeProvider>
    )
    getByText('children')
  })
})

describe('Button', () => {
  test('should render children', () => {
    const { getByText } = render(<Button>children</Button>)
    getByText('children')
  })
  test('should render button tag when no href', () => {
    const { getByRole } = render(<Button />)
    getByRole('button')
  })
  test('should render "a" tag when href is passed', () => {
    const { getByRole } = render(<Button href="/" externalLink />)
    getByRole('link')
  })
  test('should disabled when disabled is truthy', () => {
    const { getByText } = render(<Button disabled>button</Button>)
    expect(getByText('button')).toBeDisabled()
  })
  test('should disabled and render loadingSpinner when loading is truthy', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider ThemeProvider theme={theme}>
        <Button loading>button</Button>
      </ThemeProvider>
    )
    getByTestId('loading-spinner')
    expect(getByText('button')).toBeDisabled()
  })
})

describe('LoadingSpinner', () => {
  test('should render size properly', () => {
    const size = 7
    const { getByTestId } = render(
      <ThemeProvider ThemeProvider theme={theme}>
        <LoadingSpinner size={size} />
      </ThemeProvider>
    )
    expect(getByTestId('loading-spinner')).toHaveAttribute('height', String(size))
    expect(getByTestId('loading-spinner')).toHaveAttribute('width', String(size))
  })
})

describe('FormInput', () => {
  test('should render default properly', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider ThemeProvider theme={theme}>
        <FormInput />
      </ThemeProvider>
    )
    const input = getByPlaceholderText('Type something..')
    expect(input).toHaveAttribute('autocomplete', 'off')
    expect(input).toHaveAttribute('spellcheck', 'false')
    expect(input).toHaveAttribute('value', '')
  })
  test('should disabled when disabled is truthy', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider ThemeProvider theme={theme}>
        <FormInput placeholder="input" disabled />
      </ThemeProvider>
    )
    expect(getByPlaceholderText('input')).toBeDisabled()
  })
  test('should change value when user type', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider ThemeProvider theme={theme}>
        <FormInput placeholder="input" />
      </ThemeProvider>
    )
    const input = getByPlaceholderText('input')
    const newValue = "new value"
    userEvent.type(input, newValue)
    expect(input.value).toBe(newValue)
  })
  test('should not change value when disabled', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider ThemeProvider theme={theme}>
        <FormInput placeholder="input" disabled />
      </ThemeProvider>
    )
    const input = getByPlaceholderText('input')
    const newValue = "new value"
    userEvent.type(input, newValue)
    expect(input.value).toBe('')
  })
  test('should render helperText', () => {
    const { getByText } = render(
      <ThemeProvider ThemeProvider theme={theme}>
        <FormInput helperText="test helpertext" />
      </ThemeProvider>
    )
    getByText('test helpertext')
  })
  test('should render helperText with style color danger when error truthy', () => {
    const { getByText } = render(
      <ThemeProvider ThemeProvider theme={theme}>
        <FormInput helperText="test helpertext" error />
      </ThemeProvider>
    )
    expect(getByText('test helpertext')).toHaveAttribute('style', 'color: rgb(255, 31, 31);')
  })
})
