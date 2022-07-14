import styled, { css } from "styled-components";

interface Props {
    open: boolean;
}

export const Container = styled.div`
    width: 960px;
    height: 844px;
`;

export const Header = styled.div`
    display: flex;
    width: 960px;
`;

export const MainX = styled.div`
    width: 960px;
    height: 800px;
    display: flex;
    justify-content: center;
    background: rgba(34, 34, 36, 0.9);
    
`;