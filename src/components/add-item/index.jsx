import { Button, TextInput, View } from 'react-native';

import Card from '../card';
import React from 'react';
import { styles } from './styles'

const AddItem = ({ 
    placeholder, 
    task, 
    onHandlerChange, 
    buttonText, 
    buttonColor, 
    onHandlerSubmit
}) => {
    return (
        <View style={styles.container}>
            
        <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder={placeholder}
          autoComplete='off'
          autoCorrect={false}
          autoCapitalize='none'
          value={task}
          onChangeText={onHandlerChange}
        />
        <Button disabled={!task} title={buttonText} color={buttonColor} onPress={onHandlerSubmit} />
      </View>
      </View>
      
    )
}

export default AddItem;