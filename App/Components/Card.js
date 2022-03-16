import React from "react";
import { Pressable, Text, View, ImageBackground, StyleSheet, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";
import { removeFromFav } from "../Redux/actionCreaters";

const mapDispatchToProps=(dispatch)=>{
    return{
        removeFromFav:(dish)=>dispatch(removeFromFav(dish))
    }
}

const Card=(props)=>{

    const removeItem=()=>{
        Alert.alert(
            'Delete',
            'Are you sure you wish to delete'+props.item.name+'item from Favorites?',
            [
                {
                    text:'Cancel',
                    onPress:()=>{console.log("canceled")},
                    style:'cancel'
                },
                {
                    text:'Delete',
                    onPress:()=>{props.removeFromFav(props.item)},
                    style:'destructive'
                }
            ],
            {cancelable:false}

        )
    }

    return(
        <Pressable onLongPress={()=>{removeItem()}}>

            <View style={styles.card}>
                <ImageBackground source={{uri:props.item.image}} resizeMode="cover" imageStyle={styles.image}  style={styles.image}>
                    <LinearGradient colors={['#00000000','#000000c0','#000000f0' ]} style={styles.textContainerColor}>
                        <View style={styles.textContainer}>
                            <Text style={styles.nameText}>{props.item.name}</Text>
                            <Text style={{padding:15, fontSize:15}}>{props.item.price}tk</Text>
                        </View>
                    </LinearGradient>

                </ImageBackground>
            </View>
        </Pressable>
    )
}
const styles=StyleSheet.create({
    card:{
        margin:'3%',
        height: 200,
        width:'94%',
        borderRadius:20,
        backgroundColor:'#000',
        flex:1,
        overflow: 'hidden',
        elevation:5
        
    },
    image:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end',
        borderRadius:20,
        overflow: 'hidden'
    },
    textContainer:{
        marginTop:'10%',
        height:'90%',
        width:'100%',
        marginBottom:0,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    textContainerColor:{
        height:'40%',
        width:'100%',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    nameText:{
        padding:10,
        color:'#fcfcfc',
        fontSize: 18,
        fontFamily: 'serif'
    }

})
export default connect(null,mapDispatchToProps)(Card);