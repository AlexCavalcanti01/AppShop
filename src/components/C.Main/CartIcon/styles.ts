import styled from "styled-components";

interface Props {
    open: boolean;
}

export const Container = styled.div`
    display: flex;
`;

export const Borsa = styled.img<Props>`
    width: 20px;
    height: 22px;
    background-color: ${p => p.open ? '#29292E' : 'none'};
    padding: 12px 16px;
    
`;
export const User = styled.img`
    width: 19px;
    height: 19px; 
    
    padding: 13px 20px;
`;