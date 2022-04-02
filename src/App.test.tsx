import React, { Component } from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

it('renders welcome message', () => {
  render(<App title="Welcome App" />)
  expect(screen.getByText('Welcome App')).toBeInTheDocument()
})
