import styled, { css } from "styled-components";

interface Props {
    open: boolean;
}

export const Container = styled.div`
    width: 960px;
    height: 844px;
    background: rgba(34, 34, 36, 0.9);
`;

export const Header = styled.div`
    width: 965px;
    height: 44px;
`;

export const Area = styled.div`
    display: flex;
    height: 800px;
`;

export const Racquets = styled.div<Props>`
    width: 940px;
    padding-left: ${p => p.open ? '20px' : '20px'};
    height: max-content;

    max-height: 100%;
    overflow-y: scroll ;
    overflow-x: hidden;
`;

export const Title = styled.h2`
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;

    color: #FFFFFF;

    padding-bottom: 15px;
`;

export const Cards = styled.div<Props>`
    ${
        p => p.open ?  css`
            display: grid;
            grid-template-columns: 260px 260px;
            column-gap: 50px;
        ` : css`
            display: grid;
            grid-template-columns: 260px 260px 260px;
            gap: 50px;
        `
    }
`;
export const Card = styled.button`
    display: flex;
    flex-direction: column;
    text-align: center;

    background: none;
    border: none;

    border-radius: 20px;
`;
export const Img = styled.img`
    width: 260px;
    height: 260px;
`;

export const Description = styled.text`
    padding-left: 16px;
    padding-bottom: 20px;
`;
export const Descript = styled.div`
    justify-content: flex-start;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    display: flex;
    align-items: center;
    letter-spacing: 0.05em;

    color: #FFFFFF;
`
export const StarBox = styled.div`
    display: flex;
    gap: 8px;

    padding-top: 8px;
    padding-bottom: 9px;
`;
export const ReviewsStar = styled.div`
    font-style: normal;
    font-weight: 200;
    font-size: 1rem;
    line-height: 20px;

    display: flex;
    align-items: center;
    letter-spacing: 0.05em;

    color: #ffffff;
`;
export const Value = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;

    display: flex;
    align-items: center;
    letter-spacing: 0.05em;

    color: #FFFFFF;
`;

export const ImgBack = styled.img`
    width: 16px;
    padding-right: 15px;
`;