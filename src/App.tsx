import React from 'react';
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from './stylesGlobal';
import { Menu } from './components/C.Menu/Menu';
import { Router } from './routes';
import MainContextProvider from './Context/Context';

import styled from 'styled-components';

const Apps = styled.div`
  width: 1280px;
  height: 844px;
  display: flex;

  padding: 90px 80px;
* {
  scrollbar-width: thin;
  scrollbar-color: #ffffff25 #222224;
  
}
`;

function App() {
  return (
    <BrowserRouter>
      <MainContextProvider>

        <GlobalStyle />

          <Apps>  
            <Menu />
            <Router />
          </Apps>
          
      </MainContextProvider> 
    </BrowserRouter>  
  );
}

export default App;
