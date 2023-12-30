// Code to query data from uniswap liquidity pool
// For more info on the type of query:https://docs.uniswap.org/api/subgraph/guides/examples#general-position-data
// This example uses JS to query 1000 days of liquidity pool data from our LP of interest, 
// starting from 8 October 2021. 

// A suitable next step would be to store the data into a database and perform testing from there
const axios  = require('axios');

const url = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3';

query = `
{
    poolDayDatas(first: 1000, orderBy: date, where: {
      pool: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640",
      date_gt: 1633642435
    } ) {
      date
      liquidity
      sqrtPrice
      token0Price
      volumeToken0
      volumeToken1
    }
  }
`

axios.post(url, {query: query})
  .then((result) => {
    console.log(result.data.data)
  })