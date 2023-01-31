import { AddItem, Card, CustomModal, Header, TaskList, TextContainer } from './components';
import { Button, Text, View } from 'react-native';
import { Buyscreen, HomeScreen } from './screens';
import React, { useState } from 'react';

import { ActivityIndicator } from 'react-native-web';
import { colors } from './constants/theme/colors';
import { styles } from './styles';
import {useFonts} from 'expo-font';

const App = () => {
  const[userText,setUserText] =useState(null)
  const[loaded]=useFonts({
  'Raleway-Bold':require('../assets/fonts/Raleway-Bold.ttf'),
  'Raleway-Regular':require('../assets/fonts/Raleway-Regular.ttf'),
  'Raleway-Medium':require('../assets/fonts/Raleway-Medium.ttf'),
  'Raleway-Light':require('../assets/fonts/Raleway-Light.ttf'),
  });
  const onHandleBuy=(selectedBuy) => {
    setUserText(selectedBuy);
  };


  const Content=()=> userText ? <Buyscreen selectedBuy={userText}/>: <HomeScreen onHandleBuy={onHandleBuy} />;

if(!loaded) {
  return(
    <View style={styles.container}>
      <ActivityIndicator size='large' color={colors.primary}/>
    </View>
  );
  }


  return (
    <View style={styles.container}>
      
      <Content/>
    </View>
  );
}
export default App;