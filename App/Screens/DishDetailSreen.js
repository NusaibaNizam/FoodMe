import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from '../Components/Icon'
import { connect } from "react-redux";
import { addAsFav } from "../Redux/actionCreaters";


const mapStateToProps=(state)=>{
    return{
        favs:state.favs
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addAsFav:(dishId)=>dispatch(addAsFav(dishId))
    }
}

const DishDetail=(props)=>{
    const dish=props.route.params.dish;
    const isFav=props.favs.some(item=> item.id==dish.id)


    const markFav=(dish)=>{
        if(isFav){
            alert("Already added to Favorites");
        }else{
            props.addAsFav(dish)
        }
    }
    let iconName="ios-heart-outline"
    if(isFav) iconName="ios-heart-sharp"
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
                            <Icon 
                                action={()=>markFav(dish)}
                                iconStyle={
                                    {
                                        marginRight:20,
                                        marginTop:12,
                                    }
                                }
                                name={iconName} 
                                size={24} 
                                color="#AB3822" 
                            />
                        </View>
                        <Text style={{ marginBottom:'3%',}}>
                            {dish.price}tk
                        </Text>
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
  
export default connect(mapStateToProps,mapDispatchToProps) (DishDetail);