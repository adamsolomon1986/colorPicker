import React from'react'
import { ColorPicker } from './colorpicker'
import {Alert, SafeAreaView, View, Text} from 'react-native'
import { Header } from './header'
import { ColorArch } from './colorArch'
import {ColorSlider} from './slider'
import {changeColor, changeOpacity} from '../redux/index'
import { connect } from 'react-redux';


class PickerScreen extends React.Component {

    onColorChange = (color)=>{
        this.props.changeColor(color)
    }

    onOpacityChanged = (opacity) => {
        this.props.changeOpacity(opacity)
    }

    render(){
        return(
            <SafeAreaView>
            <View>
                <Header color={this.props.color}/>
               <ColorPicker color={this.props.color} opacity={this.props.opacity} onChange={this.onColorChange}/>
               <ColorSlider color={this.props.color} opacity={this.props.opacity} onChange={this.onOpacityChanged}/>
               <ColorArch color={this.props.color} onChange={this.onColorChange}/>
            </View>
            </SafeAreaView>
        )
    }

}

const mapStateToProps = state => ({
    color: state.color,
    opacity:state.opacity
  });
  
  const mapDispatchToProps = {
    changeColor,
    changeOpacity,
  };
  
  const PickerScreenComp = connect(
    mapStateToProps,
    mapDispatchToProps
  )(PickerScreen);
  
  export default PickerScreenComp;