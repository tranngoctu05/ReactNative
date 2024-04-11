import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'

const Lab2 = () => {

  const class1 = [
    {
      mssv: 'PS0000',
      name: 'Nguyen Van A',
      avgPoint: 8.9,
      avgTraningPoint: 7,
      status: 'pass',
    },
    {
      mssv: 'PS0001',
      name: 'Nguyen Van B',
      avgPoint: 4.9,
      avgTraningPoint: 10,
      status: 'pass',
    }
  ];

  const class2 = [
    {
      mssv: 'PS0002',
      name: 'Nguyen Van C',
      avgPoint: 4.9,
      avgTraningPoint: 10,
      status: 'failed',
    },
    {
      mssv: 'PS0003',
      name: 'Nguyen Van D',
      avgPoint: 10,
      avgTraningPoint: 10,
      status: 'pass',
    },
    {
      mssv: 'PS0004',
      name: 'Nguyen Van E',
      avgPoint: 10,
      avgTraningPoint: 2,
      status: 'pass',
    },
  ]


  const [allStudent, setallStudent] = useState([]);

  useEffect(() => {
    setallStudent([...class1, ...class2]);
  }, []);

  const sortedByAvgPoint = allStudent
    .filter(student => student.status === 'pass')
    .sort((a, b) => b.avgPoint - a.avgPoint);
  const sortedByAvgTraningPoint = allStudent
    .filter(student => student.status === 'pass')
    .sort((a, b) => b.avgTraningPoint - a.avgTraningPoint);
  const ongVang = sortedByAvgPoint.length > 0 ? sortedByAvgPoint[0] : null;
  //bai2
  const oldData = [
    { code: 'ab', name: 'Son môi' },
    { code: 'ac', name: 'Sữa sửa mặt' },
    { code: null, name: null },
    { code: null, name: '' },
  ];
  
  const parseArrayToObject = ({ array = [], keyId = '' }) =>
    Object.fromEntries(
      array?.map(item => [keyId ? item?.[keyId] : item, item] || [])
    );
  
  const filterObject = obj => {
    Object.keys(obj).forEach(key => {
      if (obj[key].code === null || obj[key].code === '') {
        delete obj[key];
      }
    });
    return obj;
  };
  
  const newData = parseArrayToObject({ array: oldData, keyId: 'code' });
  const filteredData = filterObject(newData);
  console.log(filteredData);
  

  //bai3
  const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 2000)
  });
  const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Error:some bug');
    }, 2000)
  });



  const getList = async () => {
    try {
      await Promise.all([firstPromise, secondPromise]).then(results => {
        results.forEach(result => {
          if (result.startsWith('Error')) {
            console.error(result);
            throw new Error('có lỗi');
          }
        });
      }).then(() => {
        console.log('tất cả ko có lỗi');
      }).catch(error => {
        console.error(error);
      });
      await Promise.allSettled([firstPromise, secondPromise]).then(results => {
        results.forEach(result => {
          if (result.status === 'rejected') {
            console.error(result.reason);
          }
        });
      }).then(() => {
        console.log('tất cả promise ok');
      }).catch(error => {
        console.error(error);
      }).finally(() => {
        console.log('dù succed hay fail vẫn chạy');
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <View>
      <Text style={styles.header}>Bài 1</Text>
       <View style={styles.bai1}>
        <Text style={styles.caption}>Thống kê danh sách sinh viên theo điểm trung bình:</Text>
        {sortedByAvgPoint.map((danhsach, index) => (
          <Text key={index} style={styles.content}>
            {danhsach.mssv} - {danhsach.name} - {danhsach.avgPoint} - {danhsach.avgTraningPoint} - {danhsach.status}
          </Text>
        ))}
      </View>

      <View style={styles.bai1}>
        <Text style={styles.caption}>Thông tin ong vàng:</Text>
        {ongVang && (
          <View>
            <Text style={styles.content}>Name: {ongVang.name}</Text>
            <Text style={styles.content}>Student ID: {ongVang.mssv}</Text>
            <Text style={styles.content}>Average Point: {ongVang.avgPoint}</Text>
            <Text style={styles.content}>Status: {ongVang.status}</Text>
          </View>
        )}
      </View>
      <Text style={styles.header}>Bài 2</Text>
      <View style={styles.bai1}>
        <Text style={styles.caption}>NewData</Text>
      {Object.entries(filteredData).map(([key, value]) => (
        <View key={key} style={styles.item}>
          <Text>{`${key}: ${JSON.stringify(value)}`}</Text>
        </View>
      ))}
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
  header:{
fontSize:30,
padding:20,
fontWeight:'bold',
color:'red'

  },
  container: {
    flex: 1,
    padding: 20,
  },
  bai1: {
    marginTop:10,
    marginBottom: 20,
    padding: 20,
    borderWidth:1,
    
  },
  caption: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 5,
  },

})
export default Lab2