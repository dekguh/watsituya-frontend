import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkWalletConnected } from '../../utils/ether'
import { actSetAddress, actSetIsLogin } from '../../utils/redux/auth/reduce'
import { AppDispatch, RootState } from '../../utils/redux/store'
import HomeTemplate from '../templates/HomeTemplate'

const HomePage : React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const authState = useSelector((state : RootState) => state.auth)

  const handleAddress = (addr : string | null) => {
    if(addr !== null) dispatch(actSetIsLogin(true))
    if(addr === null) dispatch(actSetIsLogin(false))
    return dispatch(actSetAddress(addr))
  }
  
  useEffect(() => {
    checkWalletConnected(handleAddress)
  }, [])

  return (
    <HomeTemplate />
  )
}

export default HomePage