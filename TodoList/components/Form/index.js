import React ,{ useState} from 'react';
import { View, Text, Keyboard, TextInput, TouchableOpacity, Alert } from 'react-native'

import styles from './style'

const From = (props) => {
 const [task, setTask] = useState('')
    const handleAddtask =()=>{
        if(task.length===0){
            Alert.alert("Hãy nhập công việc!")
            return false;
        }
        props.onAddTask(task);
        setTask('');
        Keyboard.dismiss();
    
    }
    return (
        <View style={styles.addTask}>
            <TextInput 
            value={task}
            placeholder='Nhập công việc' 
            style={styles.input}
            onChangeText={(text) =>setTask(text)}
            />
            <TouchableOpacity
            onPress={handleAddtask}
            >
                <View style={styles.iconSwapper}>
                    <Text style={styles.icon}>+</Text>
                </View>
            </TouchableOpacity>


        </View>
    )
}

export default From;