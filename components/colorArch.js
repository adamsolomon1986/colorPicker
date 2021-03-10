import React, { Component } from 'react';
import { Dimensions, StyleSheet, View,Text } from 'react-native';
import { ColorBar } from './colorBar';

 export const ColorArch = ({color,onChange}) => (
  <View style={[styles.arch, {backgroundColor:color}]}>
    <ColorBar onChange={onChange}/>
  </View>
);

export const styles = StyleSheet.create({
    arch:{
        height:120, width:Dimensions.get('window').width,
        padding:20, paddingLeft:40, position:'absolute', bottom:-40,
        borderTopLeftRadius:80, borderTopRightRadius:80
    }

})