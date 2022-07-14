import React from 'react';
import { NavBar } from '../NavBar';
import * as C from './styles'
import LogoImg from '../../../assets/Logoo.png';

export const Options = () => {
    return (
        <C.Container>
            <C.Spac>
                <C.Spac1 />
                <C.Spac2 />
                <C.Spac3 />
            </C.Spac>
            <C.Logo src={LogoImg} />
            
                <NavBar />
            
            
        </C.Container>
    );
}