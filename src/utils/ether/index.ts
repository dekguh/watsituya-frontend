declare var window: any

const detectMetamask = () => {
    if(typeof window.ethereum !== 'undefined') return true
    return false
}

export const handleConnectWallet = async () => {
    if(detectMetamask()) {
        const provider = window.ethereum

        const accounts = await provider.request({
            method: 'eth_requestAccounts'
        })
        const account = accounts.length > 0 ? accounts[0] : []

        return account
    }
}

export const checkWalletConnected = async (setAddress : (addr : string | null) => any) => {
    if(detectMetamask()) {
        const accounts = await window.ethereum.request({
            method: 'eth_accounts'
        })

        if(accounts.length > 0) return setAddress(accounts[0])
        return setAddress(null)
    }
    return setAddress(null)
}