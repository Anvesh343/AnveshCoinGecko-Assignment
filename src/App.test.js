import { render, screen, act } from "@testing-library/react";
import App from './App';

import React from 'react';


test('To check Image ', () => {
  render(<App />);
  const Image = screen.getByText(/Image/i);
  expect(Image).toBe(Image);
});

