import React, { useContext } from 'react';
import * as C from './styles';
import { MyBag } from "../../../Context/Context" 

import { Search } from '../Search';
import { Tennis } from '../Screen/Tennis';
import { CartIcon } from '../CartIcon';
import { MyCart } from '../MyCart';



export const Main = () => {
    const {open} = useContext(MyBag)

    return (
        
            <C.Container>
                <C.Header>
                    <Search />
                    <CartIcon />
                </C.Header> 
                   
                <C.MainX >
                    <Tennis />
                    <MyCart />
                </C.MainX>
                
                
            </C.Container>
        
    );
} 