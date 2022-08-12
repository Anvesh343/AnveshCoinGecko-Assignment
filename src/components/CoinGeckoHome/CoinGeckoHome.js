import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import TableCoins from '../CoingeckoHeader/CoinGeckoHeader'
import ReactPagenate from 'react-paginate'

import './CoinGeckoHome.css'


const CoinGeckoHome = () => {
    const [coins, setCoins] = useState([])

    // Heare I'm Calling url using getData function
  const getData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=100&sparkline=false')
    setCoins(res.data)
  }
  useEffect(() => {
    getData() // calling getData function to fetcht API Requeset
  },[])

  // fetchComments Funtion will give current 10 coin list
  const fetchComents = async(curentPage) => {
      const pageres = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=${curentPage}&page=10&sparkline=false`
        )
        const data = await pageres.json()
        return data
  }

  // handlePageClick Function will gives next 10 coin list 
  const handlePageClick = async(data) => {
    let curentPage = data.selected + 10
    const itemsFromServer = await fetchComents(curentPage) // here I'm Calling fetchComments funtion 
    setCoins(itemsFromServer)
  }

  return (
    <>
    <div className='coin-gecko-container'>
      <div className='coin-gecko-data'>
        <div>
          <h4 className='coin-text'>
            COIN GECKO
          </h4>
        </div>
        {/* heare I'm Passing coin Details to header file */}
       <TableCoins coins={coins} />
      </div>
      <ReactPagenate
      breakLabel = {'...'}
      pageCount={10}
      onPageChange={handlePageClick}
      containerClassName={'pagination justify-content-center p-4'}
      pageClassName = {'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      activeClassName={'active'}
      
       />
    </div>
    </>
  );
}
export default CoinGeckoHome