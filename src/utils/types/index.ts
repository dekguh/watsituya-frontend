import { MouseEventHandler } from "react";

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