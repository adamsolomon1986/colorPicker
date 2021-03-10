import React, { Component } from 'react';
import { Dimensions, StyleSheet, View,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


 export const Header = ({color}) => (
  <View style={styles.header}>
     <View>
         <Ionicons name='arrow-back' color={color}style={[styles.label, {color:color}]}/>
     </View>
     <View>
         <Text style={[styles.label, {color:color}]}>New Color</Text>
     </View>
  </View>
);

 const styles = StyleSheet.create({
    header:{
        height:100, width:Dimensions.get('window').width, flexDirection:'row',
        padding:20, paddingLeft:40, justifyContent:'flex-start',
         justifyContent:'flex-start', alignItems:'center'
    },

    label:{
        fontSize:20, marginRight:50, fontWeight:'bold'
    }


})