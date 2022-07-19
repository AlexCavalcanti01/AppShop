import React from "react";
import * as C from './styles';
import { Link } from "react-router-dom";

import { Search } from '../../components/C.Main/Search';
import { MyCart } from '../../components/C.Main/MyCart';
import { Star } from '../../components/Star';

import Racquets1 from '../../assets/Racquets1.png';
import Back from '../../assets/ButtonBack.png';
import Voltar from '../../assets/Voltar.png';
import Time from '../../assets/Time.png';
import Gift from '../../assets/Gift.png';

export const RacquetsItem = () => {
    return (
        <C.Container>
            <C.Header> <Search /> </C.Header> 
                <C.Area>
                    <C.Item>
                        <C.ItemText> <Link to='/Racquets/Tour'> <C.ImgBack src={Back} /></Link> Racquets - Tour - Head Boom Pro</C.ItemText>
                            <C.AreaItem>
                                <C.ImgItem src={Racquets1} />
                                <C.AreaDescription>

                                    <C.AreaDescription1>
                                        <C.Descrip>HEAD Boom Pro</C.Descrip>
                                        <C.p>Product No: 233502</C.p>
                                        <C.StarBox><Star /> <Star /><Star /><Star /><Star /><C.ReviewsStar>3 Reviews</C.ReviewsStar></C.StarBox>
                                        <C.Value>€290.00</C.Value>
                                    </C.AreaDescription1>

                                    <C.AreaDescription2>
                                        <C.DescriptionHeader>DESCRIPTION</C.DescriptionHeader>
                                        <C.DescriptionText>Enjoy explosive, exhilarating power with the new BOOM PRO TENNIS RACQUET, designed for tournament players seeking greater stability and a heavier weight.</C.DescriptionText>
                                    </C.AreaDescription2>

                                    <C.AreaDescription3>
                                        <C.RacquetStrung>RACQUET STRUNG</C.RacquetStrung>
                                        <C.Buttons>
                                            <C.Button>Unstrung</C.Button>
                                            <C.Button>Strung</C.Button>
                                        </C.Buttons>
                                    </C.AreaDescription3>

                                    <C.AreaDescription4>
                                        <C.GripSize>GRIP SIZE</C.GripSize>
                                        <C.AreaSize>
                                            <C.Size>1</C.Size>
                                            <C.Size>2</C.Size>
                                            <C.Size>3</C.Size>
                                            <C.Size>4</C.Size>
                                            <C.Size>5</C.Size>
                                        </C.AreaSize>
                                    </C.AreaDescription4>

                                    <C.Card>ADD TO CART</C.Card>

                                    <C.AreaDescription5>
                                        <C.Delivery><C.IconTime src={Time} />Free Delivery on orders over €40.</C.Delivery>
                                        <C.Delivery><C.IconGift src={Gift} />Delivery time 2 business days.</C.Delivery>
                                        <C.Delivery><C.IconVoltar src={Voltar} />Free returns on all orders.</C.Delivery>
                                    </C.AreaDescription5>

                                </C.AreaDescription>  
                            </C.AreaItem>    
                    </C.Item>
                    <MyCart />
                </C.Area>
    
        </C.Container>
    );
}