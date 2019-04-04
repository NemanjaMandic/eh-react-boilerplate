import React from 'react'
import { render } from 'react-testing-library'
import App from './App'

describe('App', () => {
  it('Renders without error', () => {
    render(<App />)
  })

  it('Renders without error', () => {
    expect(true).toBe(true)
  })
})
