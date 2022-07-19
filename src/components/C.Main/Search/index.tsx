import React from 'react';
import * as C from './styles';


import VectorImg from '../../../assets/Vector1.png';
import { CartIcon } from '../CartIcon';

export const Search = () => {
    return (
        <>
            <C.Container>
                <C.Area>
                    <C.Busca > <C.Img src={VectorImg} /> <C.Text>Search</C.Text></C.Busca>  
                </C.Area>  
                <CartIcon />  
            </C.Container>
        </>
    );
}