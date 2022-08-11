import { render, screen, act } from "@testing-library/react";
import App from './App';
import CoinGeckoHome from './components/CoinGeckoHome'
import React from 'react';


test('To check Image ', () => {
  render(<App />);
  const Image = screen.getByText(/Image/i);
  expect(Image).toBe(Image);
});


test('To check Symbol ', () => {
  render(<App />);
  const Symbol = screen.getByText(/Symbol/i);
  expect(Symbol).toBe(Symbol);
});


test('To check Current Price ', () => {
  render(<App />);
  const CurrentPrice = screen.getByText(/Current Price/i);
  expect(CurrentPrice).toBe(CurrentPrice);
});

test('To check Low In 24h ', () => {
  render(<App />);
  const Low = screen.getByText(/Low In 24h/i);
  expect(Low).toBe(Low);
});

test('To check High In 24h ', () => {
  render(<App />);
  const High = screen.getByText(/High In 24h/i);
  expect(High).toBe(High);
});

test('To check COIN GECKO Heading ', () => {
  render(<App />);
  const COINGECKO = screen.getByText(/COIN GECKO/i);
  expect(COINGECKO).toBe(COINGECKO);
});


// test('renders a message', () => {
//   const {asFragment, getByText} = render(<CoinGeckoHome />)
//   expect(getByText('Hello, world!')).toBeInTheDocument()
//   expect(asFragment()).toMatchInlineSnapshot(`
//     <h1>Hello, World!</h1>
//   `)
// })