import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Bai1 = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Flask là một web framework, nó là một Python module cho phép bạn phát triển các ứng dụng web một cách dễ dàng. Nó có tính mở rộng và là một microframework không bao gồm ORM (Object Relational Manager) hoặc các tính năng tương tự.</Text>
            <Text style={styles.textStyle2}>Tuy nhiên, khi dự án trở nên lớn lên. Việc đưa tất cả các dòng code vào một file là điều khó khăn. Dự án Python sử dụng package để tổ chức source code thành nhiều modules. Rằng có thể import khi nào cần, và trong phần hướng dẫn này sẽ thực hiện điều đó.</Text>
        </View>
    )
}

export default Bai1;
const styles = StyleSheet.create({
    textStyle: {
        color: 'red',
        fontFamily: 'opensans_condensed-extrabold',
        padding: 10,
        fontSize: 20,

    },
    textStyle2: {
        color: 'blue',
        fontFamily: 'opensans-semibold',
        padding: 10,
        fontSize: 20,
    }
})