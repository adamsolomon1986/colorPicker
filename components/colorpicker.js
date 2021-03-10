import React, { Component } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { ColorWheel } from '../libs/colorWheel/ColorWheel'

 export const ColorPicker = ({color, opacity, onChange}) => (
  <View style={[{flex: 1, alignSelf:'center'}]}>
    
    <ColorWheel
      initialColor={color}
      onColorChange={color => console.log({color})}
      onColorChangeComplete={color => onChange(color)}
      style={styles.wheel}
      thumbStyle={{ height: 30, width: 30, borderRadius: 30}}
    />

<View style={[styles.wheelBg,
  {backgroundColor:color, opacity:opacity }]}>
    </View>
  </View>
);


const styles = StyleSheet.create({
    wheel:{zIndex:1, width: Dimensions.get('window').width/2, height:Dimensions.get('window').width},
    wheelBg:{flex: 1, alignSelf:'center', 
    height:Dimensions.get('window').width * .85,
    width:Dimensions.get('window').width * .9,
      zIndex:-1,position:'absolute', alignSelf:'center',
    borderRadius:Dimensions.get('window').width,
    }

})