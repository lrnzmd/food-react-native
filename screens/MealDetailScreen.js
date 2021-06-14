import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const MealDetailScreen = () =>  {
    return (
        <View style={style.screen}>
            <Text>The Meal Detail Screen</Text>
        </View>
    )
}

const style = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default MealDetailScreen