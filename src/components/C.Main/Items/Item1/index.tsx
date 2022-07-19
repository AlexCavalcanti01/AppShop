import React from "react";
import * as C from './styles';

import  ImgRacquets  from "../../../../assets/RacquetsItem.png";
import ImgQty from "../../../../assets/SetaDown.png";

export const Item1 = () => {
    return (
        <C.Container>
            <C.Title>HEAD Boom PRO Tennis Racquet</C.Title>
            <C.Value>€280.00</C.Value>
            <C.Box>
                <C.Img src={ImgRacquets} />
                <C.List>
                    <C.ListName>Racquet Strung; Strung</C.ListName>
                    <C.ListSize>Grip Size : 4</C.ListSize>
                    <C.Qty>Qty : 1<C.QtyUnd src={ImgQty} /></C.Qty>
                </C.List>
            </C.Box>
        </C.Container>
    );
}