import styled, { css } from "styled-components";

interface Props {
    open: boolean;
}

export const Container = styled.div<Props>`
    width: ${p => p.open ? '635px' : '960px'};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;

    max-height: 100%;
    overflow-y: scroll ;
`;

export const Racquets = styled.div<Props>`
    width: ${p => p.open ? '580px' : '894px'};
    height: max-content;

    padding-top: 14px;  
    
`;
export const Shoes = styled.div<Props>`
    width: ${p => p.open ? '580px' : '894px'};
    height: max-content;
    margin-bottom: 1rem;
    
`;

export const Title = styled.h2`
    width: 163px;
    height: 39px;

    font-family: 'Clash Display';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;

    color: #FFFFFF;

    padding-bottom: 27px;
`;

export const Cards = styled.div<Props>`
    ${
        p => p.open ?  css`
            display: grid;
            grid-template-columns: 260px 260px;
            column-gap: 54px;
        ` : css`
            display: flex;
            gap: 54px;
        `
    }
`;
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.5));
    border-radius: 20px;
`;
export const Img = styled.img`
    width: 261px;
    height: 287px;
`;
export const Text = styled.text`
    font-family: 'Clash Display';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;

    letter-spacing: 0.05em;

    color: #FFFFFF;
`;

