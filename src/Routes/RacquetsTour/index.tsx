import React, { useContext } from 'react';
import * as C from './styles';
import { Link } from "react-router-dom";

import { MyBag } from "../../Context/Context";
import { Search } from '../../components/C.Main/Search';
import { MyCart } from '../../components/C.Main/MyCart';

import Racquets1 from '../../assets/Racquets1.png';
import Racquets2 from '../../assets/Racquets2.png';
import Racquets3 from '../../assets/Racquets3.png';
import Racquets4 from '../../assets/Racquets4.png';
import Racquets5 from '../../assets/Racquets5.png';
import Racquets6 from '../../assets/Racquets6.png';
import Back from '../../assets/ButtonBack.png';

import { Star } from '../../components/Star';

export const RacquetsTour = () => {
    const {open} = useContext(MyBag);

    return (
        
            <C.Container>
                <C.Header> 
                    <Search />
                </C.Header> 
                <C.Area>
                <C.Racquets open={open} >
                        <C.Title> <Link to='/'> <C.ImgBack src={Back} /></Link> Racquets - Tour</C.Title>
                        <C.Cards open={open}>
                            <Link to='/HeadBoomPro' >
                            <C.Card > 
                                <C.Img src={Racquets1} />
                                <C.Description>
                                    <C.Descript>HEAD Boom Pro</C.Descript>
                                    <C.StarBox><Star /> <Star /><Star /><Star /><Star /><C.ReviewsStar>3 Reviews</C.ReviewsStar></C.StarBox>
                                    <C.Value>€290.00</C.Value>
                                </C.Description>
                            </C.Card>
                            </Link>
                            <C.Card>
                                 <C.Img src={Racquets2} />
                                 <C.Description>
                                    <C.Descript>HEAD Boom MP</C.Descript>
                                    <C.StarBox><Star /> <Star /><Star /><Star /><Star /><C.ReviewsStar>2 Reviews</C.ReviewsStar></C.StarBox>
                                    <C.Value>€270.00</C.Value>
                                 </C.Description>
                            </C.Card>
                            <C.Card>
                                <C.Img src={Racquets3} />
                                <C.Description>
                                    <C.Descript>HEAD Boom TEAM</C.Descript>
                                    <C.StarBox><Star /> <Star /><Star /><Star /><Star /><C.ReviewsStar>2 Reviews</C.ReviewsStar></C.StarBox>
                                    <C.Value>€230.00</C.Value>
                                </C.Description>
                            </C.Card>
                            <C.Card>
                                <C.Img src={Racquets4} />
                                <C.Description>
                                    <C.Descript>HEAD Speed Pro</C.Descript>
                                    <C.StarBox><Star /> <Star /><Star /><Star /><Star /><C.ReviewsStar>3 Reviews</C.ReviewsStar></C.StarBox>
                                    <C.Value>€290.00</C.Value>
                                </C.Description>
                            </C.Card>
                            <C.Card>
                                <C.Img src={Racquets5} />
                                <C.Description>
                                    <C.Descript>HEAD Speed MP</C.Descript>
                                    <C.StarBox><Star /> <Star /><Star /><Star /><Star /><C.ReviewsStar>2 Reviews</C.ReviewsStar></C.StarBox>
                                    <C.Value>€270.00</C.Value>
                                </C.Description>
                            </C.Card>
                            <C.Card>
                                <C.Img src={Racquets6} />
                                <C.Description>
                                    <C.Descript>HEAD Speed TEAM</C.Descript>
                                    <C.StarBox><Star /> <Star /><Star /><Star /><Star /><C.ReviewsStar>2 Reviews</C.ReviewsStar></C.StarBox>
                                    <C.Value>€230.00</C.Value>
                                </C.Description>
                            </C.Card>
                        </C.Cards> 
                    </C.Racquets>
                    <MyCart />
                </C.Area>
            </C.Container>
        
    );
} 