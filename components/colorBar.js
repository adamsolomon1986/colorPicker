import React, { Component } from 'react';
import { Dimensions, StyleSheet, View,Text } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const defaultColors = ['blue','green', 'orange', 'purple', 'black']

const renderColor = ({item},onChange) => (
    
        <TouchableOpacity 
        onPress={()=>onChange(item)}
        style={[styles.colorItem, {backgroundColor:item}]}>

        </TouchableOpacity>

)

 export const ColorBar = ({onChange}) => (
  <View style={styles.bar}>
    <FlatList
    contentContainerStyle={styles.bar}
    horizontal
    data={defaultColors}
    renderItem={item=> renderColor(item,onChange)}
    />
  </View>
);

export const styles = StyleSheet.create({
    bar:{
        flex:1,
        height:60, width:Dimensions.get('window').width * .8,
        justifyContent:'space-evenly'
    },
    colorItem:{
        height:40, width:40, borderRadius:20,
    }

})