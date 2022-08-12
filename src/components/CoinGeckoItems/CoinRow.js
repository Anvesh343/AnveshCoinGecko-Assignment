import React from "react";
import './Coin.css'
import {Link} from 'react-router-dom'


const CoinRow = ({coin}) => {
    return (
      <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>

          <img src={coin.image} alt='crypto' />
          <h1>{coin.name}</h1>
          {/* Linking to Navigate next Page to view Coin Details */}
          <Link to={`/coin-id/${coin.id}`} className="link-item">
          <p className=' coin-symbol'>{coin.symbol}</p>
          </Link>
          </div>
          <div className="coin-data">
          <p className=' coin-price'>€{coin.current_price}</p>
          <p className=' coin-volume'>€{coin.high_24h}</p>
          <p className=' coin-marketcap'>
          €{coin.low_24h}
          </p>
        </div>
      </div>
    </div>
    
    )
}

export default CoinRow 