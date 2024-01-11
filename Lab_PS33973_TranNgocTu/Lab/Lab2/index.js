import { View, Text, StyleSheet } from 'react-native'
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
  const newData = {
    ab: { code: 'ab', name: 'Son môi' },
    ac: { code: 'ac', name: 'Sữa rửa nặt' }
  }
  const parseArrayToObject = ({ array = [], keyId = '' }) =>
    Object.fromEntries(
      array?.map(item => [keyId ? item?.[keyId] : item, item] || [],
      )
    )
  const filterObject = obj => {
    Object.ket(obj).forEach(key => {
      if (obj[key].code === null || obj[key].code === '') {
        delete obj[key];
      }
    });
    return obj;

  };


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

  const getList = async () =>{
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

      // Yêu cầu thứ hai: Tiếp tục cho tất cả các promise kết thúc, bất kể thành công hay thất bại
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
  }


  return (
    <View>
      <Text>
      </Text>

    </View>
  )
}
const styles = StyleSheet.create({

  container: {
    backgroundColor: 'white'
  }

})
export default Lab2