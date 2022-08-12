import React from "react";
import './CoinGeckoHeader.css'
import CoinRow from '../CoinGeckoItems/CoinRow'

const CoinGeckoHeader = ({coins}) => {
  
return (
  <div className='table-container'>
      <div className="coin-header-row">
        <div className="coin-header">
          <p className="coin-header image">Image</p>
          <p className="coin-header symbol">Symbol</p>
          <p className="coin-header price">Current Price</p>
          <p className="coin-header coin-high-24h">High In 24h</p>
          <p className="coin-header coin-low-24h">Low In 24h</p>
        </div>
      </div>
      {/* maping every item in coin */}
      {coins.map((coin, i) => (
    <CoinRow coin={coin} index={i + 1} key={i} />
  ))}
  </div>
  
    
)
}
export default CoinGeckoHeader;  