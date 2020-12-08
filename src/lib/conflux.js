import { Conflux } from 'js-conflux-sdk'

//构造合约所需要使用的 abi 文件。
import abiSCFX from './abi/SCFX.json'
import abiFactory from './abi/factory.json'
import abiRouter from './abi/router.json'
import abiWATER from './abi/WATER.json'
import abiICE from './abi/ICE.json'

//是 js-conflux-sdk 的封装。
// js-conflux-sdk 是由 Conflux 提供的 JavaScript SDK，
// 本前端项目使用 SDK 来连接 Conflux 网络，和合约进行交互以及构造合约中的实例。
const conflux = new Conflux({
  url: "http://test.confluxrpc.org",
  defaultGasPrice: 90000000, // The default gas price of your following transactions
  defaultGas: 90000000, // The default gas of your following transactions
  logger: console,
})

export const ContractSCFX = {
  name: 'SCFX',
  abi: abiSCFX,
  contract: conflux.Contract({
    abi: abiSCFX,
    address: process.env.REACT_APP_CONFLUX_COIN_ADDRESS,
  }),
}

export const ContractRouter = {
  name: 'Router',
  abi: abiRouter,
  contract: conflux.Contract({
    abi: abiRouter,
    address: '0x840e02d0987427180be7583c6e274d66f5c6c260',
  }),
}

export const ContractFactory = {
  name: 'Factory',
  abi: abiFactory,
  contract: conflux.Contract({
    abi: abiFactory,
    address: '0x8d40f8a4850e191eb4732c8951ea5f5d25c10024',
  }),
}

export const ContractWATER = {
  name: 'WATER',
  abi: abiWATER,
  contract: conflux.Contract({
    abi: abiWATER,
    address: "0x8475f6bf06941e71b82faa48cbb0e0141c6f51d9",
  }),
}

export const ContractICE = {
  name: 'ICE',
  abi: abiICE,
  contract: conflux.Contract({
    abi: abiICE,
    address: "0x86d5b2c00fe883efcb29389cda9ba0ca632a64b4",
  }),
}

export default conflux