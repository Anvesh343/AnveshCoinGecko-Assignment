import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import CoinGeckoHome from "./components/CoinGeckoHome";
import CoinsDetails from "./CoinsDetails/CryptoCurrensy";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* heare I'm routing Two pages */}
      <Route path="/" element={<CoinGeckoHome/>}/>
      <Route exact path="/coin-id/:id" element={<CoinsDetails/>}/> 
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;
