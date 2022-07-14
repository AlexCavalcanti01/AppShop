import React from 'react';
import { Categories } from '../Categories';
import { Options } from '../Options';
import * as C from './styles'

export const Menu = () => {
    return (
        <C.Container>
            <Options />
            <Categories />
        </C.Container>
    );
}