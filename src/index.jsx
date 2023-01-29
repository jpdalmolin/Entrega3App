import { AddItem, CustomModal, Header, TaskList } from './components';
import React, { useState } from 'react';

import { View } from 'react-native';
import { colors } from './constants/theme/colors';
import { styles } from './styles';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

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
  }



  const onHandleCancel = () => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(null);
  }
  const onHandleDelete = () => {
    setTasks((prevTaskList) => prevTaskList.filter((task) => task.id !== selectedTask.id));
    setIsModalVisible(!isModalVisible);
  }

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
     />
    </View>
  );
}
export default App;