import { render, screen, } from "@testing-library/react";
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import CoinRow from '../CoinRow'


const MockCoinrow = () => {
    
    return (
    <BrowserRouter>
        <CoinRow coin={10}/>
    </BrowserRouter>
    )
   
}

test('To check List ', () => {
    render(
        <MockCoinrow coin={10}/>
    );
    const items = screen.getAllByRole("listitem");
    console.log(items)
    expect(items.length).toEqual(items.length);
  });