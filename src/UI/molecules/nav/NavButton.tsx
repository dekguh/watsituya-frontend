import React from 'react'
import { INavButton } from '../../../utils/types'
import Box from '../../atoms/box/Box'
import Button from '../../atoms/controls/Button'

const NavButton : React.FC<INavButton> = ({ onClickConnect, onClickMenu }) => {
    return (
        <Box paddingLeft={'30px'} order={['3', '2', '2', '3', '3']}>
            <Button variant='secondary' display={['block', 'none', 'none', 'block', 'block']} onClick={onClickConnect}>
                <div className='text'>
                    <span className='text-gradient'>connect wallet</span>
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