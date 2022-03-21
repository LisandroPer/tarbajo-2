import React from 'react';
import { View, Text } from 'react-native'
import Header from './components/header/index';
import StartGameScreen from './screens/sttart-game-screen';
import { styles } from './styles';
const App = () =>{
  return(
    <View style={styles.container}>
      <StartGameScreen />
    </View>
  );
};

export default App;