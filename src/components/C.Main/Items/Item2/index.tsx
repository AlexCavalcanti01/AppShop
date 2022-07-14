import React from "react";
import * as C from './styles';

import  ImgShoes  from "../../../../assets/ShoesItem.png";
import ImgQty from "../../../../assets/SetaDown.png";

export const Item2 = () => {
    return (
        <C.Container>
            <C.Title>HEAD Sprint Pro 3.5 Men Shoes</C.Title>
            <C.Value>€150.00</C.Value>
            <C.Box>
                <C.Img src={ImgShoes} />
                <C.List>
                    <C.ListName>Colors; BSTE</C.ListName>
                    <C.ListSize>Size: 43</C.ListSize>
                    <C.Qty>Qty: 1<C.QtyUnd src={ImgQty} /></C.Qty>
                </C.List>
            </C.Box>
        </C.Container>
    );
}