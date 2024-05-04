import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, } from 'react-native';
import AppNavigation from './Components/AppNavigation';
import { AppProvider } from './Components/main/AppContext';

function App(): React.JSX.Element {
  return (
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <AppNavigation />
      </SafeAreaView>
    </AppProvider>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {Header, createStackNavigator} from '@react-navigation/stack';
// import Exclusiveoffer from './Components/main/stacks/product/Exclusiveoffer';

// const Stack = createStackNavigator();

// function App(): React.ReactElement {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Exclusiveoffer">
//         <Stack.Screen
//           name="Exclusiveoffer"
//           component={Exclusiveoffer}
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
