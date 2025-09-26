import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import ProfileSreen from '../Screen/ProfileScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';

          if (route.name === 'Trang Chủ') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Thêm') {
            iconName = 'add-circle';
          } else if (route.name === 'Hồ Sơ') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Trang Chủ" component={HomeScreen} />
      <Tab.Screen name="Thêm" component={() => null} />
      <Tab.Screen name="Hồ Sơ" component={ProfileSreen} />
    </Tab.Navigator>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Trang Chủ"
      screenOptions={{ headerShown: true }}
    >
      <Drawer.Screen
        name="Trang Chủ"
        component={TabNavigation}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Trang Chủ';
          let title = 'Trang Chủ';
          if (routeName === 'Trang Chủ') {
            title = 'Trang Chủ';
          } else if (routeName === 'Hồ Sơ') {
            title = 'Hồ Sơ';
          }
          return {
            title,
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          };
        }}
      />

      <Drawer.Screen
        name="Hồ Sơ"
        component={TabNavigation}
        options={{
          title: 'Hồ Sơ',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Làm Việc"
        component={TabNavigation}
        options={{
          title: 'Làm Việc',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="briefcase-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Chill"
        component={TabNavigation}
        options={{
          title: 'Chill',
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="game-controller-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={TabNavigation}
        options={{
          title: 'Setting',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings  -outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}



