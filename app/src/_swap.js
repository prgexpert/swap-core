import bitcoinJsLib from 'bitcoinjs-lib'
import { web3 } from './instances/ethereum'
import { SwapApp, setupEnv } from './swap/index'
import { ethereumInstance, bitcoinInstance } from './instances'


// // Chrome
// localStorage.setItem('ethPrivateKey', '0xa6316e9e231fa70f2f41ce755f3846b74af10e8c5def8d333ec89af3b9b4193b')
// localStorage.setItem('btcPrivateKey', 'cUSH65TpCkU5rsMem8WND5itr3SVF192EAKA8E5ipqs15fTJiRbc')

// // Yandex
// localStorage.setItem('ethPrivateKey', '0xe32a5cb068a13836b6bc80f54585bbfcc2d5d9089f0c5381b27d039b6d2404ec')
// localStorage.setItem('btcPrivateKey', 'cRF7Az481ffsuhhZ28x32Xk4ZvPh98zhKv7hCi1pKjifqvv7AcuX')

const ethPrivateKey = localStorage.getItem('ethPrivateKey')
const btcPrivateKey = localStorage.getItem('btcPrivateKey')

const ethAccount = ethereumInstance.login(ethPrivateKey)
const btcAccount = bitcoinInstance.login(btcPrivateKey)

localStorage.setItem('ethPrivateKey', ethAccount.privateKey)
localStorage.setItem('btcPrivateKey', btcAccount.getPrivateKey())

const localClear = localStorage.clear.bind(localStorage)

global.clear = localStorage.clear = () => {
  localClear()
  localStorage.setItem('ethPrivateKey', ethAccount.privateKey)
  localStorage.setItem('btcPrivateKey', btcAccount.getPrivateKey())
}




new Swap(order, BTC2ETH)


// app.on('ready', () => {
//   console.log('swapApp ready')
//   console.log('initial orders', app.getOrders())
// })
//
// app.on('user online', (peer) => {
//   console.log('user online', peer)
// })
//
// app.on('user offline', (peer) => {
//   console.log('user offline', peer)
// })
//
// app.on('new orders', (swaps) => {
//   console.log('new orders', swaps)
// })
//
// app.on('new order', (swap) => {
//   console.log('new order', swap)
// })
//
// app.on('remove order', (swap) => {
//   console.log('remove order', swap)
// })
//
// app.on('new order request', ({ swapId, participant }) => {
//   console.error(`user ${participant.peer} requesting swap`, {
//     swap: app.orderCollection.getByKey(swapId),
//     participant,
//   })
// })


export {
  app,
  web3,
  bitcoinJsLib,
  ethAccount,
  btcAccount,
}