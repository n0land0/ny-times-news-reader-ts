import React, { useState, useEffect, useContext } from 'react';

import Header from './Header';
import Gallery from './Gallery';
import Detail from './Detail';

const App = () => {

  return (
    <main>
      <Header />
      <Gallery />
      <Detail />
    </main>
  )
}

export default App;
