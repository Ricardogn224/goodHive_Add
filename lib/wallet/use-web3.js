import { useState, useCallback } from 'react'
import { ethers } from 'ethers'

import { CHAINS_ID_TO_NETWORKS_LIST } from '../../constants/chains-id-to-networks'

export const WEB3_STATUS_NOT_CONNECTED = 'not_connected'
export const WEB3_STATUS_CONNECTED = 'connected'

export default function useWeb3() {
  const [provider, setProvider] = useState(null)
  const [signer, setSigner] = useState(null)
  const [chainIdUsed, setChainIdUsed] = useState(null)
  const [connectedAddress, setConnectedAddress] = useState('')
  const [stepActive, setStepActive] = useState(0)

  const [status, setStatus] = useState(WEB3_STATUS_NOT_CONNECTED)

  // Connect wallet + check of chain ID if in WL
  const connectWallet = useCallback(async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)

      setProvider(provider)

      const chainIdUsedFromWallet = await ethereum.request({
        method: 'eth_chainId',
      })

      const chainID = parseInt(chainIdUsedFromWallet, 16)
      console.log(chainID, chainIdUsedFromWallet)

      if (
        !Object.keys(CHAINS_ID_TO_NETWORKS_LIST).includes(chainID.toString())
      ) {
        alert(
          'This network in Url do not match with an network supported by app Feature.'
        )

        return
      }

      setChainIdUsed(chainID)

      try {
        const accountsConnected = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })

        setConnectedAddress(accountsConnected[0])
      } catch (error) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        if (error.code === 4001) {
          console.log('Please connect to MetaMask.')
        } else console.error(error)

        return false
      }

      const signer = provider.getSigner()

      setStatus(WEB3_STATUS_CONNECTED)

      setSigner(signer)

      setStepActive(1)

      return true
    } else {
      console.log('The Dapp required to install Metamask.')

      return false
    }
  }, [])

  return {
    provider,
    signer,
    chainIdUsed,
    stepActive,
    connectedAddress,
    connectWallet,
    status,
  }
}