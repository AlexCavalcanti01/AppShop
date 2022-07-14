import React from 'react';

import styled from 'styled-components';
import { GlobalStyle } from './stylesGlobal';
import { Menu } from './components/C.Menu/Menu';
import { Main } from './components/C.Main/Main';
import MainContextProvider from './Context/Context';

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
    <MainContextProvider>
      <GlobalStyle />
        <Apps>  
          <Menu />
          <Main />
        </Apps>
    </MainContextProvider> 
      
  );
}

export default App;
