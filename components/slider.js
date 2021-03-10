import React from "react";
import Slider from "react-native-slider";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Entypo } from '@expo/vector-icons'; 


export const ColorSlider = ({color, opacity, onChange})=> (
      <View style={styles.container}>
     <View>
<Entypo name="light-down" size={24} color={color} />
</View>   
        <View>
        <Slider
          value={opacity}
          onValueChange={onChange}
          thumbTintColor={color}
          trackStyle={{backgroundColor:color}}
          thumbStyle={{backgroundColor:color}}
          minimumTrackTintColor={color}
          maximumTrackTintColor={color}
          style={styles.slider}
        />
        </View>
<View>
<Entypo name="light-up" size={24} color={color} />
</View>
      </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center", flexDirection:'row'
  },
  slider:{
      width:Dimensions.get('window').width * .6, alignSelf:'center',
      margin:40, justifyContent:'center', 
  }
});