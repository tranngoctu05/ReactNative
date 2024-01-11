import React, { useState } from 'react';
import { ScrollView, SafeAreaView, StatusBar, Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import Task from './components/Task';
import styles from './App.cpmponent.style';
import Form from './components/Form'
const App = () => {
  console.log('helloo');
  const [taskList, settaskList] = useState([])
  const handleAddTask = (task) => {
    settaskList([...taskList, task])
  }
  const handleDeleteTask = (index) => {
    Alert.alert('Thông báo', 'Bạn có muốn xóa', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {text: 'OK', onPress: () => {
        let TaskListTam =[...taskList];
        TaskListTam.splice(index,1);
        settaskList(TaskListTam);
      }},
    ]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>TodoList</Text>
        <ScrollView style={styles.items}>
          {
            taskList.map((item, index) => {
              return <Task key={index} title={item} number={index + 1} onDeleteTask={() => handleDeleteTask(index)} />
            })
          }
        </ScrollView>

      </View>

      <Form onAddTask={handleAddTask} />

    </View>

  )
}



export default App;
