import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './Home';
import Notifications from './Notification';
import {View, Text} from 'react-native';

const Drawer = createDrawerNavigator();

function App() {
  return (
    // <View>
    //   <Text>Hello World</Text>
    // </View>
    <View>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home page" component={HomeScreen} />
          {/* <Drawer.Screen name="Notifications page" component={Notifications} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
