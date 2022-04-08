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
        const account = accounts[0]

        return account
    }
}