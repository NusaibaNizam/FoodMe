import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Home=()=>{
    return(
    <SafeAreaProvider>
        <SafeAreaView>
            <View style={styles.view}>
                <Text>
                    Home Screen
                </Text>
            </View>

        </SafeAreaView>
    </SafeAreaProvider>
    );
}

const styles=StyleSheet.create({
    view:{
        paddingTop: Platform.OS==='ios'? 0:Constants.statusBarHeight,
    }
});

export default Home;