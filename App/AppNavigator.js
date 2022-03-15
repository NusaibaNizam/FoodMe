import React from "react";
import Home from "./Screens/HomeScreen";
import Menu from "./Screens/MenuScreen";
import DishDetail from "./Screens/DishDetailSreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import 'react-native-gesture-handler';

const Drawer=createDrawerNavigator()
const Stack=createNativeStackNavigator()

const MenuStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Menu" component={Menu}/>
            <Stack.Screen name="Dish Detail" component={DishDetail}/>
        </Stack.Navigator>
    );
}

const AppNavigator=()=>{
    return(
        <Drawer.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false,
          }}>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="MenuStack" component={MenuStack}/>
        </Drawer.Navigator>
    );
}
export default AppNavigator;