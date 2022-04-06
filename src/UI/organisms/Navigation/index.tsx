import React, { useState } from 'react'
import styled from 'styled-components'
import { display, DisplayProps, space, SpaceProps, flexbox, FlexboxProps, layout, LayoutProps } from 'styled-system'
import NavButton from '../../molecules/nav/NavButton'
import NavList from '../../molecules/nav/NavList'
import NavLogo from '../../molecules/nav/NavLogo'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <NavWrapper
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
            />
        </NavWrapper>
    )
}

const NavWrapper = styled('div')<SpaceProps & FlexboxProps & DisplayProps & LayoutProps>(
    space,
    flexbox,
    display,
    layout
)

export default Navigation