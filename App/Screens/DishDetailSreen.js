import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const DishDetail=(props)=>{
    const dish=props.route.params.dish;
    return(

            <SafeAreaProvider>
                <SafeAreaView style={{flex:1}}>
                <View style={styles.container}>
                    <Image source={{uri:dish.image}} style={styles.image}/> 
                    <View style={{ flex:13, margin:10 }} >
                        <View style={styles.topRow}>
                            
                            <Text style={{fontWeight: 'bold',fontSize:30}}>
                                {dish.name}
                            </Text>
                            <Text style={{marginTop:15,marginRight:20,color: '#6e6969',}}>
                                {dish.price} tk
                            </Text>
                        </View>
                        <Text style={styles.bottomRow}>
                            {dish.category} {dish.label}
                        </Text>
                        <Text style={{fontSize:13, color: '#d2d8d9',}}>
                            {dish.description}
                        </Text>
                    </View>
                    </View>

                </SafeAreaView>
            </SafeAreaProvider>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginLeft:'2%',
        marginRight:'2%',
        marginTop:'1%',
        },
    image:{ 
        flex: 19, 
        width:'100%', 
        borderBottomLeftRadius:35,
        borderTopLeftRadius: 5, 
        borderTopRightRadius: 5, 
    },
    topRow:{
        flexDirection:"row",
        justifyContent:'space-between',
        paddingBottom:10
    },
    bottomRow:{
        fontSize:12, 
        color: '#6e6969',
        textTransform: 'capitalize',
        marginBottom:3
    },
  });
  
export default DishDetail;