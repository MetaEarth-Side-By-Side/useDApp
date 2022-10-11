import { Chain } from '../../constants'
import { getAddressLink, getTransactionLink } from '../../helpers/chainExplorerLink'

const CoinExExplorerUrl = 'https://www.coinex.net/'

export const CoinEx: Chain = {
  chainId: 35,
  chainName: 'CoinEx',
  isTestChain: false,
  isLocalChain: false,
  multicallAddress: '0xe2ec58a54f3ab2714eddbae87533793011f1e14e',
  rpcUrl: 'https://rpc.coinex.net/',
  nativeCurrency: {
    name: 'CET',
    symbol: 'CET',
    decimals: 18,
  },
  blockExplorerUrl: CoinExExplorerUrl,
  getExplorerAddressLink: getAddressLink(CoinExExplorerUrl),
  getExplorerTransactionLink: getTransactionLink(CoinExExplorerUrl),
}

const CoinExTestnetExplorerUrl = 'https://testnet.coinex.net/'

export const CoinExTestnet: Chain = {
  chainId: 365,
  chainName: 'CoinEx Testnet',
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: '0xf822bf2e728e264c58d7618022addd9cbc780350',
  rpcUrl: 'https://testnet-rpc.coinex.net/',
  nativeCurrency: {
    name: 'CET',
    symbol: 'CET',
    decimals: 18,
  },
  blockExplorerUrl: CoinExTestnetExplorerUrl,
  getExplorerAddressLink: getAddressLink(CoinExTestnetExplorerUrl),
  getExplorerTransactionLink: getTransactionLink(CoinExTestnetExplorerUrl),
}

export default {
  CoinEx,
  CoinExTestnet,
}
