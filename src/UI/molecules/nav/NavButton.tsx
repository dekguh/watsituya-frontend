import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../utils/redux/store'
import { INavButton } from '../../../utils/types'
import Box from '../../atoms/box/Box'
import Button from '../../atoms/controls/Button'

const NavButton : React.FC<INavButton> = ({ onClickConnect, onClickMenu }) => {
    const authState = useSelector((state : RootState) => state.auth)

    return (
        <Box paddingLeft={'30px'} order={['3', '2', '2', '3', '3']}>
            <Button variant='secondary' display={['block', 'none', 'none', 'block', 'block']} onClick={onClickConnect}>
                <div className='text'>
                    <span className='text-gradient'>{authState.isLogin ? 'you\'re connected' : 'connect wallet'}</span>
                </div>
            </Button>

            <Button variant='secondary' display={['block', 'block', 'block', 'none', 'none']} onClick={onClickMenu}>
                <div className='text'>
                    <span className='text-gradient'>menu</span>
                </div>
            </Button>
        </Box>
    )
}

export default NavButton