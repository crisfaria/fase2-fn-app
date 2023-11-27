import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index';
import MacarronadaFit from './src/pages/macarronadaFit';





export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>

  );
};
