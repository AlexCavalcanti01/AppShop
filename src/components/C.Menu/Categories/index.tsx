import React, { useState } from 'react';
import * as C from './styles'

export const Categories = ()  => {
    const [handleCategorie, setHandleCategorie] = useState(0);
    
    return (
        <C.Container>
                <C.Title><C.TitleText>Shop</C.TitleText></C.Title>
                <C.Buttons>
                    <C.Button id={0} idAtive={handleCategorie} onClick={()=>{setHandleCategorie(0)}} >Tennis</C.Button>
                    <C.Button id={1} idAtive={handleCategorie} onClick={()=>{setHandleCategorie(1)}} >Padel</C.Button>
                    <C.Button id={2} idAtive={handleCategorie} onClick={()=>{setHandleCategorie(2)}} >Squash</C.Button>
                    <C.Button id={3} idAtive={handleCategorie} onClick={()=>{setHandleCategorie(3)}} >Racquetball</C.Button>
                    <C.Button id={4} idAtive={handleCategorie} onClick={()=>{setHandleCategorie(4)}} >Ski</C.Button>
                    <C.Button id={5} idAtive={handleCategorie} onClick={()=>{setHandleCategorie(5)}} >Snowboard</C.Button>
                    <C.Button id={6} idAtive={handleCategorie} onClick={()=>{setHandleCategorie(6)}} >Sportswear</C.Button>
                    <C.Button id={7} idAtive={handleCategorie} onClick={()=>{setHandleCategorie(7)}} >Swimming</C.Button>
                </C.Buttons>
        </C.Container>
    );
}