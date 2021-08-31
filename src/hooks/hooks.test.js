import { fireEvent } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import useWindowSize from './useWindowSize'

test('should return new size when resize', () => {
  const { result } = renderHook(() => useWindowSize())

  act(() => {
    window.innerWidth = 500
    window.innerHeight = 500
    fireEvent(window, new Event("resize"))
  })
  expect(result.current.width).toBe(500)
})
