import styled, { css } from "styled-components";
import Rectangle from '../../../assets/Rectangle.png'

interface Props {
    open: boolean;
}

export const Container = styled.div<Props>`
    width: 110px;
    height: 44px;

    background: rgba(34, 34, 36, 0.8);

    ${
        p => p.open ? css`
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 30px;
            padding-right: 12px;
        ` : css`
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 30px;
        `
    }

`;

export const Borsa = styled.img`
    width: 20px;
    height: 22px;    
`;
export const User = styled.img`
    width: 19px;
    height: 19px; 
`;