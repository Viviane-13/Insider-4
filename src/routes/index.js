import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialIcons';

import StackRoutes from './stackRoutes';
import Movies from '../pages/Movies';

const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#090A0E',
          paddingTop: 20,
        },
        drawerActiveBackgroundColor: '#E72F49',
        drawerActiveTintColor: '#FFF',
        drawerInactiveTintColor: '#FFF',
      }}>
      <Drawer.Screen
        name="HomeDrawer"
        component={StackRoutes}
        options={{
          title: 'Home',
          drawerIcon: ({focused, size, color}) => (
            <Icon
              name={focused ? 'theaters' : 'movie'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Movies"
        component={Movies}
        options={{
          title: 'Meus filmes',
          drawerIcon: ({focused, size, color}) => (
            <Icon
              name={focused ? 'inventory' : 'archive'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default Routes;
