import React from 'react';
import * as C from './styles';


import { Search } from '../Search';
import { Tennis } from '../../../Routes/Tennis';

import { MyCart } from '../MyCart';



export const Main = () => {
    return (
        
            <C.Container>
                <C.Header>
                    <Search />
                </C.Header> 
                   
                <C.MainX >
                    <Tennis />
                    <MyCart />
                </C.MainX>
                
                
            </C.Container>
        
    );
} 