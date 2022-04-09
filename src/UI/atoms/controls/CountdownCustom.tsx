import css from '@styled-system/css';
import React from 'react'
import Countdown from 'react-countdown'
import styled from 'styled-components';
import { layout, LayoutProps, space, SpaceProps } from 'styled-system';

const renderer : React.FC<{ [key: string] : any}> = ({ hours, minutes, seconds }) => {
    return(
        <CountWrap>
            <CountItem>
                {hours}h
            </CountItem>

            <CountItem>
                :
            </CountItem>

            <CountItem>
                {minutes}m
            </CountItem>

            <CountItem>
                :
            </CountItem>

            <CountItem>
                {seconds}s
            </CountItem>
        </CountWrap>
    )
};

const CountdownCustom = () => {
  return (
    <Countdown
        date={Date.now() + 12929283}
        renderer={renderer}
    />
  )
}

const CountWrap = styled('ul')<LayoutProps & SpaceProps>(
    layout,
    space,
    css({
        listStyle: 'none',
        fontFamily: 'Orbitron',
        color: 'white',
        display: 'flex',
        fontSize: ['27px', '16px', '18px', '18px', '27px']
    })
)

const CountItem = styled('li')(
    layout,
    space,
    css({
        padding: '0 8px 4px 0'
    })
)

export default CountdownCustom