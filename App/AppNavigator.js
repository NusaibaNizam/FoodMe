import React from "react";
import Home from "./Screens/HomeScreen";
import Menu from "./Screens/MenuScreen";
import DishDetail from "./Screens/DishDetailSreen";
import Favorites from "./Screens/FavoritesScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "./Components/Icon";
import 'react-native-gesture-handler';
import { DrawerActions, useNavigation } from "@react-navigation/native";

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

const FavStack=()=>{

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
            <Stack.Screen name="My Favorites" component={Favorites}/>
        </Stack.Navigator>
    );
}

const AppNavigator=()=>{
    const navigation=useNavigation();
    return(
        <Drawer.Navigator initialRouteName="Home" drawerStyle={{
            backgroundColor: '#AB3822',
          }} 
          screenOptions={{
              drawerActiveBackgroundColor:'#AB382244',
              drawerActiveTintColor:'#AB3822',
              drawerInactiveBackgroundColor:'#89160011',
              drawerInactiveTintColor:'#560300'
        }}
          
          >
            <Drawer.Screen name="Home" component={Home}
            options={{
                headerLeft:()=>null,
                headerRight:()=>(
                    <Icon
                        action={()=>{navigation.dispatch(DrawerActions.openDrawer())}}
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
            }}
            />
            <Drawer.Screen name="Dishes" component={MenuStack} options={{
                 headerShown: false,
            }}/>
            <Drawer.Screen name="Favorites" component={FavStack} options={{
                 headerShown: false,
            }}/>
        </Drawer.Navigator>
    );
}
export default AppNavigator;