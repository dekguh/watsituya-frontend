import { MouseEventHandler } from 'react';
import { DisplayProps } from 'styled-system';

export interface IHomeTemplate {

}

export interface IButton {
    variant: 'primary' | 'secondary';
}

export interface INavLogo {
    text?: string;
}

export interface INavList {
    listMenu: Array<{
        title: string;
        to: string;
    }>;
    isOpen?: boolean;
}

export interface INavButton {
    onClickConnect?: MouseEventHandler;
    onClickMenu?: MouseEventHandler;
}

export interface IBoxLightBlur {
    filterValue?: number | string;
    backgroundRGBA?: string;
    width?: any;
    height?: any;
}

export interface IHomeHeroContent {
    onClickMinted?: MouseEventHandler;
    title?: string;
}