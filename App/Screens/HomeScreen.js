import React from "react";
import { ImageBackground,Text, View, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import background from '../../assets/background.jpg';

const Home=()=>{
    return(
        <ImageBackground source={background} style={{flex:1}}>
            <SafeAreaProvider>
                <SafeAreaView>

                    <View style={styles.view}>
                
                    </View>
                </SafeAreaView>
                </SafeAreaProvider>
        </ImageBackground>

    );
}

const styles=StyleSheet.create({
    view:{
        paddingTop: Platform.OS==='ios'? 0:Constants.statusBarHeight,
    }
});

export default Home;