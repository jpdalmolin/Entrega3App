import { Button, Modal, Text, View } from 'react-native'

import Card from '../card';
import React from "react";
import { styles } from "./styles";

const CustomModal = ({ isModalVisible, selectedTask, onHandleCancel, onHandleDelete,onHandleConfirm}) => {
    return (
        <Modal visible={isModalVisible} animationType='slide'>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Task Detail</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>Are you sure to delete this item?</Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button 
              title='Cancel'
              color='#626893'
              onPress={onHandleCancel}
            />
            <Button
              title='Delete'
              color='red'
              onPress={onHandleDelete}
            />
            
            
          </View>
        <View style={styles.modalTitle}>
        <Text style={styles.modalDetailMessageConfirm}>Confirm item?</Text>
        
        <Button 
              title="Confirm"
              color='blue'
              onPress={onHandleConfirm}
            />
        
        </View>


        </View>
      </Modal>
    )
}

export default CustomModal;