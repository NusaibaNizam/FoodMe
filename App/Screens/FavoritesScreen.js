import React from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import Card from "../Components/Card";

const mapStateToProps=(state)=>{
    return{
        favs:state.favs
    }
}

const Favorites=(props)=>{
    return(
        <View>
            <FlatList
                data={props.favs}
                renderItem={({item})=>(
                    <Card item={item}/>
                )}
                keyExtractor={(item)=>(item.id.toString())}
            />
        </View>
    )
}
export default connect(mapStateToProps) (Favorites);