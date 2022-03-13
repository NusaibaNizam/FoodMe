import React from "react";
import {View, StyleSheet, Image, TouchableHighlight, Text} from "react-native"

const MenuItem=(props)=>{
    return(
        <TouchableHighlight>
            <View  style={{flex:1, flexDirection: 'row', width:'100%'}}>
                    {props.item.image && <Image source={{uri:props.item.image }}  style={styles.imageView}/>}
                <View style={{flex:1, flexDirection:'column', width: '65%'}}>
                    

                    <Text style={styles.textView}>
                        {props.item.name}
                    </Text>
                    <View style={{flex:1, flexDirection: 'row'}}>

                        <Text style={styles.textViewDes} numberOfLines={3} ellipsizeMode='tail'>
                            {props.item.description}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
 
    imageView: {
    
        width: '35%',
        height: 100 ,
        margin: 7,
        borderRadius : 7
     
    },
     
    textViewDes: {
    
        width:'100%', 
        textAlignVertical:'center',
        padding:5,
        color: '#6e6969', 
        flexShrink: 1
     
    },
     
    textView: {
    
        width:'50%', 
        textAlignVertical:'center',
        padding:5,
        color: '#000',
     
    },
     
    });
export default MenuItem;