import React, {useEffect} from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { connect } from "react-redux";
import { getDishes } from "../Redux/actionCreaters";
import MenuItem from "../Components/MenuItem";

const mapStateToProps=(state)=>{
    return{
        dishes: state.dishes,
    };
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getDishes:()=>dispatch(getDishes()),
    }
}


const Menu=(props)=>{
    useEffect(()=>{
        props.getDishes();
    },[])

    console.log(props)
    return(
    <SafeAreaProvider>
        <SafeAreaView>
            <View style={styles.MainContainer}>
                <FlatList
                    data={props.dishes}
                    renderItem={({item})=>(
                        <MenuItem item={item} selectDish={()=>{
                            props.navigation.navigate("Dish Detail",{dish:item})
                        }}/>
                    )}
                    keyExtractor={item=>item.id.toString()}
                />
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
    );
}
const styles=StyleSheet.create({
    MainContainer :{
     
        justifyContent: 'center',
        margin: 5,
        marginTop: (Platform.OS === 'ios') ? 20 : 0,
     
    },     
})
export default connect(mapStateToProps,mapDispatchToProps)(Menu);