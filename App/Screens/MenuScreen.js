import React from "react";
import { Text, View, Button } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const Menu=(props)=>{
    console.log(props)
    return(
    <SafeAreaProvider>
        <SafeAreaView>
            <View>
                <Text>
                    Menu Screen
                </Text>
                <Button
                    title="Dish Detail"
                    onPress={()=>{
                        props.navigation.navigate("Dish Detail")
                    }}
                />
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
    );
}
export default Menu;