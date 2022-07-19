import styled from "styled-components";

export const Container = styled.div`
    width: 960px;
    height: 44px;
    
    display: flex;

    align-items: center;

    background: rgba(34, 34, 36, 0.8);
`;

export const Area = styled.div`
    width: 850px;
    height: 44px;
    
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Busca = styled.button`
    width: 400px;
    height: 30px;

    background: linear-gradient(180deg, rgba(34, 34, 36, 0) 0%, rgba(34, 34, 36, 0.7) 100%);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.05em;
    gap: 9px;
`;

export const Img = styled.img`
    width: 16px;
    height: 16px;
`;

export const Text = styled.text`
    width: 59px;
    height: 20px;

    color: #FFFFFF;

    font-family: 'Clash Display';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

 

