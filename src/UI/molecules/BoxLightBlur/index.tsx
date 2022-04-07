import React from 'react'
import { DisplayProps, PositionProps, SpaceProps } from 'styled-system'
import { IBoxLightBlur } from '../../../utils/types'
import { default as BoxLightBlurAtom } from '../../atoms/box/BoxLightBlur'

const BoxLightBlur : React.FC<IBoxLightBlur & PositionProps & DisplayProps & SpaceProps> = ({
    filterValue,
    backgroundRGBA,
    display,
    position,
    top,
    bottom,
    left,
    right,
    width,
    height
}) => {
  return (
    <BoxLightBlurAtom
        position={position}
        display={display}
        top={top}
        bottom={bottom}
        left={left}
        right={right}
        background={backgroundRGBA}
        width={width}
        height={height}
        style={{
            filter: `blur(${filterValue})`,
            borderRadius: '100%'
        }}
    />
  )
}

export default BoxLightBlur