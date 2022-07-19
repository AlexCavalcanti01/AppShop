import React, { useContext } from "react";
import * as C from './styles'

import { Link } from "react-router-dom";

import ImgL1 from '../../assets/L1.png';
import ImgL2 from '../../assets/L2.png';
import ImgL3 from '../../assets/L3.png';
import ImgL4 from '../../assets/L4.png';
import ImgL5 from '../../assets/L5.png';
import ImgL6 from '../../assets/L6.png';

import { MyBag } from "../../Context/Context";

export const Tennis = () => {
    const {open} = useContext(MyBag);

    return (
        <C.Container open={open} >
            <C.Racquets open={open} >
                <C.Title>Racquets</C.Title>
                    <Link to='/Racquets/Tour'>
                    <C.Cards open={open}>
                        <C.Card>
                            <C.Img src={ImgL1} />
                            <C.Text>Tour</C.Text>
                        </C.Card>
                        <C.Card>
                            <C.Img src={ImgL2} />
                            <C.Text>Recreational</C.Text>
                        </C.Card>
                        <C.Card>
                            <C.Img src={ImgL3} />
                            <C.Text>Juniors</C.Text>
                        </C.Card>
                    </C.Cards>
                    </Link>
            </C.Racquets>
            <C.Shoes open={open} >
                <C.Title>Shoes</C.Title>
                    <C.Cards open={open} >
                        <C.Card>
                            <C.Img src={ImgL4} />
                            <C.Text>Men</C.Text>
                        </C.Card>
                        <C.Card>
                            <C.Img src={ImgL5} />
                            <C.Text>Women</C.Text>
                        </C.Card>
                        <C.Card>
                            <C.Img src={ImgL6} />
                            <C.Text>Junior</C.Text>
                        </C.Card>
                    </C.Cards>
            </C.Shoes>
        </C.Container>
    );
}