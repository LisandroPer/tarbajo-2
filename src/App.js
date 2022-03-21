import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native'
import GameScreen from './screens/game-screen';
import StartGameScreen from './screens/sttart-game-screen';
import { styles } from './styles';

const App = () =>{
  const [userNumber, setUserNumber] = useState();

  const handleStartGame = (selectedNumbre) =>{
    setUserNumber(selectedNumbre);
  }

  let content = <StartGameScreen onStartGame={handleStartGame} />
  
  if(userNumber) {
    content = <GameScreen userOptions={userNumber}/>
  }
  return(
    <SafeAreaView style={styles.container}>
       {content}
    </SafeAreaView>
  );
};

export default App;