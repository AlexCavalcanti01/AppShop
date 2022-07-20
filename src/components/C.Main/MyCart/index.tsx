import React, { useContext } from "react";
import * as C from './styles';
import { Link } from "react-router-dom";

import { MyBag } from "../../../Context/Context";
import { Item1 } from "../Items/Item1";
import { Item2 } from "../Items/Item2";


import ImgMais from '../../../assets/MaisImg.png';

export const MyCart = () => {
    const {open} = useContext(MyBag);

    return (
        <C.Container open={open} >
            <C.Header><C.HeaderText>My Bag</C.HeaderText></C.Header>
            <C.Items>
            <Link to='/HeadBoomPro' ><Item1 /></Link>
                  <Item2 />
            </C.Items>
            
            <C.Summary>
                <C.Text>ORDER SUMMARY (2 ITEMS)</C.Text>
                <C.Subtotal><C.SubText>Subtotal</C.SubText><C.SubValue>€430.00</C.SubValue></C.Subtotal>
                <C.Tax><C.TaxText>Tax</C.TaxText><C.TaxValue>€86.00</C.TaxValue></C.Tax>
                <C.Total><C.TotalText>Total</C.TotalText><C.TotalValue>€430.00</C.TotalValue></C.Total>
                <C.Cod><C.CodText>Enter your voucher code</C.CodText> <C.CodMais src={ImgMais}/></C.Cod>
                <C.Button><C.ButtonText>CHECKOUT</C.ButtonText></C.Button>
            </C.Summary>
        </C.Container>
    );
}