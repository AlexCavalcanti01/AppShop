import React from 'react';
import * as C from './styles';


import VectorImg from '../../../assets/Vector1.png';

export const Search = () => {
    return (
        <>
            <C.Container>
                <C.Busca > <C.Img src={VectorImg} /> <C.Text>Search</C.Text></C.Busca>
            </C.Container>
        </>
    );
}