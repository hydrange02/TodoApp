import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screen/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import Profile from "../Screen/ProfileScreen";


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = "";

          if (route.name === "Trang Chủ") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Thêm") {
            iconName = "add-circle";
          } else if (route.name === "Hồ Sơ") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Trang Chủ" component={HomeScreen}/>
      <Tab.Screen name="Thêm" component={()=>null} />
      <Tab.Screen name="Hồ Sơ" component={Profile} />
    </Tab.Navigator>
  );
}
