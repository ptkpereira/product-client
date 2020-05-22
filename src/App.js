import React from 'react';
import Products from './components/Products'
import Header from './components/Header'

import * as S from './styled'

function App() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <Header />
      <Products />
    </S.Container>
  );
}

export default App;
