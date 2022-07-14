import React,{ useState } from 'react';
import * as C from './styles'

import HomeImg from '../../../assets/Home.png';
import NewsImg from '../../../assets/News.png';
import ShopImg from '../../../assets/Shop.png';
import PartnerImg from '../../../assets/Partner.png';


export const NavBar = () => {
    const [handleClick, setHandleClick] = useState(0);

    return (
            <C.Container >
                <C.Home 
                    onClick={()=>{setHandleClick(0)}} 
                    id={0}
                    idActive={handleClick}   
                    src={HomeImg}
                 />
                <C.Shop 
                    onClick={()=>{setHandleClick(1)}}
                    id={1}
                    idActive={handleClick}    
                    src={ShopImg} 
                />
                <C.Partner
                    onClick={()=>{setHandleClick(2)}}
                    id={2}
                    idActive={handleClick}
                    src={PartnerImg}
                />
                <C.News 
                    onClick={()=>{setHandleClick(3)}}
                    id={3}
                    idActive={handleClick}    
                    src={NewsImg} 
                />
            </C.Container>
    );
}