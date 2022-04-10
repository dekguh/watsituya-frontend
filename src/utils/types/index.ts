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

export interface ICardNFT {
    imgSrc?: string;
    user?: string;
    totalEth?: number | string;
    id?: number;
    title?: string;
    to?: string;
}

export interface ICardRate {
    iconSrc?: string;
    textRate?: string;
    priceRate?: string | number;
    isUp?: boolean;
    /**
     * 10% or -10%
     */
    totalChange?: number | string;
}

export interface IAuthState {
    isLogin?: boolean;
    address?: string | null;
}