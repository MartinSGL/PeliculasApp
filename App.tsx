import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import 'react-native-gesture-handler';
import { GradientProvider } from './src/context/GradientContext';
import { Navigation } from './src/navigation/Navigation';

const AppState = ({children}:any) =>{
  return(
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation/>
      </AppState>
    </NavigationContainer>
  )
}

export default App