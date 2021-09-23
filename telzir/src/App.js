import React from 'react';
import './App.css';
import PlansProvider from './context/Plansprovider'; 
import Fieldes from './Components/Fildes';
import Images from './Components/Images'

function App() {
  return (
    <PlansProvider>
      <Fieldes />
      <Images />
    </PlansProvider>
  );
}

export default App;
