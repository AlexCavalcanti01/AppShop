import React from "react";
import * as C from './styles';
import StarImg from '../../assets/StarIcon.png';

export const Star = () => {
    return (
        <C.Container>
            <C.Star src={StarImg} />
        </C.Container>
    );
}