import styled, { css } from "styled-components";

interface Props {
    open: boolean;
}

export const Container = styled.div<Props>`
    ${
        p => p.open ? css`
        width: 625px;
        display: flex;
        flex-direction: column;
        max-height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        padding-left: 15px;
        ` : css`
        width: 960px;
        display: flex;
        flex-direction: column;
        max-height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        padding-left: 15px;
        `
    }
`;

export const Racquets = styled.div`
`;
export const Shoes = styled.div`
`;

export const Title = styled.h2`
    width: 163px;
    height: 39px;

    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    color: #FFFFFF;

    padding-top: 15px;
    padding-bottom: 27px;
`;

export const Cards = styled.div<Props>`
    ${
        p => p.open ?  css`
            display: grid;
            grid-template-columns: 260px 260px;
            column-gap: 54px;
            padding-bottom: 15px;
        ` : css`
            display: flex;
            gap: 54px;
            padding-bottom: 15px;
        `
    }
`;
export const Card = styled.div`
    margin-top: 10px;
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
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
`;