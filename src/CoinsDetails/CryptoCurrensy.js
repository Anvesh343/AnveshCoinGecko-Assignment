import {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import './cryptoCurrency.css'

const coinsDetails = () => {
  const [coins, setCoins] = useState([])
  const params = useParams()

  // fetching api to get coin details 
  const getData = async () => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${params.id}?localization=true`
    )
    setCoins(res.data) // 
  }
  useEffect(() => { 
    getData(); // Calling getData funtion to fetch Api Request
  }, []);
  
  return (
    <div className='app-cointainer'>
      <h1 className='heading'>Coin Details</h1>
      <div className='coin-container'>
      <p>Name : {coins.name}</p>
      <p>Symbol : {coins.symbol}</p>
      <p>Hashing Algorithm : {coins.hashing_algorithm}</p>
      <p>{params.current_price}</p>
    </div>
      </div>
      
  )
}
export default coinsDetails;