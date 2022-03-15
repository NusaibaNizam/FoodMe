import React from "react";
import Home from "./Screens/HomeScreen";
import Menu from "./Screens/MenuScreen";
import DishDetail from "./Screens/DishDetailSreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "./Components/Icon";
import 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

const Drawer=createDrawerNavigator()
const Stack=createNativeStackNavigator()

const MenuStack=()=>{

    const navigation=useNavigation();

    return(
        <Stack.Navigator
            screenOptions={
                {
                    headerRight:()=>(
                        <Icon
                            action={()=>{navigation.toggleDrawer()}}
                            name="md-menu-outline" 
                            size={24} 
                            color='#f0fff0'
                            iconStyle={{paddingRight:15}}
                        />
                    ),
                    headerStyle:{
                        backgroundColor:'#AB3822'
                    },
                    headerTintColor:'#f0fff0',
                    headerTitleStyle:{
                        fontWeight:'bold',
                        fontFamily: 'serif'
                    }
                }
            }
        >
            <Stack.Screen name="Menu" component={Menu}/>
            <Stack.Screen name="Dish Detail" component={DishDetail}
                options={({route})=>({title:route.params.dish.name})}
            />
        </Stack.Navigator>
    );
}

const AppNavigator=()=>{
    return(
        <Drawer.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false,
          }}>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Dishes" component={MenuStack}/>
        </Drawer.Navigator>
    );
}
export default AppNavigator;