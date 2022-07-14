import React, { useContext } from "react";
import { MyBag } from "../../../Context/Context" 
import * as C from './styles';

import BorsaImg from '../../../assets/Borsa.png';
import UserImg from '../../../assets/User.png';



export const CartIcon = () => {
    const { open, MyBagClick } = useContext(MyBag);

    return (
        <>
            <C.Container open={open}>
                <C.Borsa 
                    onClick={() => MyBagClick()} 
                    src={BorsaImg}
                />
                <C.User 
                    src={UserImg} 
                />
            </C.Container>
        </>
    );
}