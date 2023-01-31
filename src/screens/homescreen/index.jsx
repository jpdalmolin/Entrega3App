import { AddItem, Card, CustomModal, Header, TaskList, TextContainer } from '../.././components';
import { Button, Text, View } from 'react-native';
import React, { useState } from 'react';

import {Buyscreen} from '../buyscreen/index';
import { colors } from '../../constants/theme/colors';
import { styles } from './styles';

const HomeScreen = ({onHandleBuy}) => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const[confirmed,setConfirmed] = useState(false);
  const[selectedBuy, setSelectedBuy] = useState(null);
 
  
  const onHandlerBuy=()  => {   
    onHandleBuy(selectedBuy);
  }



  const onHandlerChange = (text) => {
    
    setTask(text.replace(/[^A-z]/g, ''));
  }

  const onHandlerSubmit = () => {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(),
        value: task
      }
    ]);
    setTask('');
  }
  const onHandlerModal = (item) => {
    setIsModalVisible(!isModalVisible)
    setSelectedTask(item);
    console.log(item);
    
  }



  const onHandleCancel = () => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(null);
  }
  const onHandleDelete = () => {
    setTasks((prevTaskList) => prevTaskList.filter((task) => task.id !== selectedTask.id));
    setIsModalVisible(!isModalVisible);
  }
  const onHandleConfirm = () => {
    const ChoosenText= selectedTask.value;
   if(ChoosenText==isNaN){
    alert('no es texto')
   } else{

    setSelectedBuy(ChoosenText);
    setConfirmed(true);
    setIsModalVisible(!isModalVisible);
     console.log(setSelectedBuy);
     console.log(selectedBuy);
   }
    

  }

 
  
  const Confirmed=()=> confirmed ? (
    <Card style={styles.confirmedContainer}>
      <Text style={styles.confirmedTitle}>Compra Seleccionada</Text>
      <TextContainer text={selectedBuy}></TextContainer>
      
      <Button
      title="Ir al carro"
      color={colors.primary}
      onPress={onHandleBuy}
      />
      


    </Card>
    
  ):null;
    
    

      
  return (
    <View style={styles.container}>
      <Header title='Agrega compra' />
      
      <AddItem 
        buttonColor={colors.primary}
        buttonText='Add'
        onHandlerChange={onHandlerChange}
        onHandlerSubmit={onHandlerSubmit}
        placeholder='Agregar nueva compra'
        task={task}
      />
     
      <TaskList 
        tasks={tasks}
        onHandlerModal={onHandlerModal}
      />
     
     <CustomModal 
        isModalVisible={isModalVisible}
        onHandleCancel={onHandleCancel}
        onHandleDelete={onHandleDelete}
        selectedTask={selectedTask}
        onHandleConfirm={onHandleConfirm}
     />
      <Confirmed   />
      
    </View>
  );
}
export default HomeScreen;