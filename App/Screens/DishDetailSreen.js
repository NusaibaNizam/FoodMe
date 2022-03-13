import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const DishDetail=()=>{
    return(

            <SafeAreaProvider>
                <SafeAreaView>
                    <View>
                        <Text>
                            DishDetail Screen
                        </Text>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
    );
}
export default DishDetail;