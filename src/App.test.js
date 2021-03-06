import React from 'react';
import { render, cleanup } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <App />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});

