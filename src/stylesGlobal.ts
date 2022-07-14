import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    font-family: Arial, Helvetica, sans-serif;
    html{
        width: 100vw;
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;

        background: linear-gradient(235.69deg, #D2ADFF -30.19%, #34678B 92.42%);
        border-radius: 20px;
        button, img {
            cursor: pointer;
        }
        
    }
    
    * {
        margin: 0;
        padding: 0;
    }
`;