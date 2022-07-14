import styled from "styled-components";

interface Props  {
    idAtive: number;
    id: any;
} 

export const Container = styled.div`
    width: 244px;
    height: 844px;

    display: flex;
    flex-direction: column;
    
    background: rgba(34, 34, 36, 0.7);
    backdrop-filter: blur(30px);
`;

export const Title = styled.div`
    width: 244px;
    height: 44px;

    background: rgba(255, 255, 255, 0.001);
    box-shadow: inset 0px -1px 0px rgba(255, 255, 255, 0.1);
`;
export const TitleText = styled.h1`
    width: 60px;
    height: 27px;

    font-family: 'Clash Display';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;

    padding-left: 16px;
    padding-bottom: 9px;
    padding-top: 8px;

    letter-spacing: 0.05em;

    color: #FFFFFF;
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    padding-top: 26px;
    padding-left: 16px;


`;

export const Button = styled.button<Props>`
    padding-left: 28px;
    width: 212px;
    height: 40px;
    text-align: left;
    background: ${p => p.id === p.idAtive ? '#222224CC' : 'none'};
    border: none;

    color: #FFFFFF;
    letter-spacing: 0.05em;
`;