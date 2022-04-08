import React, { useState } from 'react'
import styled from 'styled-components'
import { display, DisplayProps, space, SpaceProps, flexbox, FlexboxProps, layout, LayoutProps, position, PositionProps } from 'styled-system'
import { handleConnectWallet } from '../../../utils/ether'
import NavButton from '../../molecules/nav/NavButton'
import NavList from '../../molecules/nav/NavList'
import NavLogo from '../../molecules/nav/NavLogo'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <NavWrapper
            position='relative'
            zIndex={99}
            display='flex'
            flexDirection={'row'}
            flexWrap={['nowrap', 'wrap', 'wrap', 'nowrap', 'nowrap']}
            maxWidth={'1262px'}
            margin='0 auto'
            padding='20px 15px'
            alignItems={'center'}
        >
            <NavLogo />

            <NavList
                listMenu={[
                    {
                        title: 'home',
                        to: '#'
                    },
                    {
                        title: 'featured',
                        to: '#'
                    },
                    {
                        title: 'listing',
                        to: '#'
                    },
                    {
                        title: 'about us',
                        to: '#'
                    },
                    {
                        title: 'contact',
                        to: '#'
                    }
                ]}
                isOpen={isOpen}
            />

            <NavButton
                onClickMenu={() => setIsOpen(!isOpen)}
                onClickConnect={() => {
                    const connect = async () => {
                        const data = await handleConnectWallet()
                        console.log(data)
                    }
                    connect()
                }}
            />
        </NavWrapper>
    )
}

const NavWrapper = styled('div')<SpaceProps & FlexboxProps & DisplayProps & LayoutProps & PositionProps>(
    space,
    flexbox,
    display,
    layout,
    position
)

export default Navigation