import styled from "styled-components";

import NavBarImg from '../../../assets/NavBar.png';

export const Container = styled.div`
    width: 70px;
    height: 844px;

    margin-left: 8px;
    margin-top: -90px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-image: url(${NavBarImg});
    background-repeat: no-repeat;
    background-size: 70px 844px;
`;

interface Props  {
    idActive: number;
    id: any;
} 

export const Home = styled.img<Props>`
    background: #222224;
    border-radius: 50px;
    margin-top: 130px;
    padding: 13px 10px;

    width: 26px;
    height: 20px;

    border: ${p => p.id === p.idActive ? '1px solid #FFFFFF' : '1px solid none'};

`;

export const Shop = styled.img<Props>`
    width: 41px;
    height: 41px;

    background: #222224;
    border-radius: 50px;
    margin-top: 30px;
    padding: 4px;

    border: ${p => p.id === p.idActive ? '1px solid #FFFFFF' : '1px solid none'};
`;

export const Partner = styled.img<Props>`
    width: 43px;
    height: 43px;

    background: #222224;
    border-radius: 50px;
    margin-top: 31px;
    padding: 3px;

    border: ${p => p.id === p.idActive ? '1px solid #FFFFFF' : '1px solid none'};
`;

export const News = styled.img<Props>`
    width: 26px;
    height: 21px;

    margin-top: 29px;
    background: #222224;
    border-radius: 50px;
    padding: 12px;

    border: ${p => p.id === p.idActive ? '1px solid #FFFFFF' : '1px solid none'};
`;