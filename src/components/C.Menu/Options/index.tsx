import React from 'react';
import { NavBar } from '../NavBar';
import * as C from './styles'
import LogoImg from '../../../assets/Logoo.png';
import { Link } from "react-router-dom";

export const Options = () => {
    return (
        <C.Container>
            <C.Spac>
                <Link to="/exit"><C.Spac1 /></Link>
                <Link to="/"><C.Spac2 /></Link>
                <C.Spac3 />
            </C.Spac>
            <C.Logo src={LogoImg} />
            
                <NavBar />
            
            
        </C.Container>
    );
}