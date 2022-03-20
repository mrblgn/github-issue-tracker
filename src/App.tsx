import React from 'react';
import {GlobalProvider} from './context';
import {Navigation} from './navigation';

const App = () => (
  <GlobalProvider>
    <Navigation />
  </GlobalProvider>
);

export default App;
