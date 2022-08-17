import { render, screen, } from "@testing-library/react";
import React from 'react';

import CoingeckoHome from '../CoinGeckoHome'

test('To check Image ', () => {
  render(<CoingeckoHome />);
  const Image = screen.getByText(/Image/i);
  expect(Image).toBe(Image);
});


test('To check Image ', () => {
    render(<CoingeckoHome />);
    const Image = screen.getByText(/Image/i);
    expect(Image).toBe(Image);
  });
  
  
  test('To check Symbol ', () => {
    render(<CoingeckoHome/>);
    const Symbol = screen.getByText(/Symbol/i);
    expect(Symbol).toBe(Symbol);
  });
  
  
  test('To check Current Price ', () => {
    render(<CoingeckoHome/>);
    const CurrentPrice = screen.getByText(/Current Price/i);
    expect(CurrentPrice).toBe(CurrentPrice);
  });
  
  test('To check Low In 24h ', () => {
    render(<CoingeckoHome/>);
    const Low = screen.getByText(/Low In 24h/i);
    expect(Low).toBe(Low);
  });
  
  test('To check High In 24h ', () => {
    render(<CoingeckoHome/>);
    const High = screen.getByText(/High In 24h/i);
    expect(High).toBe(High);
  });
  
  test('To check COIN GECKO Heading ', () => {
    render(<CoingeckoHome/>);
    const COINGECKO = screen.getByText(/COIN GECKO/i);
    expect(COINGECKO).toBe(COINGECKO);
  });
