import React from'react'
import { ColorPicker } from './colorpicker'
import {Alert, SafeAreaView, View} from 'react-native'
import { Header } from './header'
import { ColorArch } from './colorArch'
import {ColorSlider} from './slider'
import {changeColor, changeOpacity} from '../redux/index'
import { connect } from 'react-redux';


class PickerScreen extends React.Component {

    state = {color: '#e8e8e8', opacity:1}

    onColorChange = (color)=>{
        this.setState({color:color})
    }

    onOpacityChanged = (opacity) => {
        this.setState({opacity:opacity})
    }

    render(){
        return(
            <SafeAreaView>
            <View>
                <Header color={this.state.color}/>
               <ColorPicker color={this.state.color} opacity={this.state.opacity} onChange={this.onColorChange}/>
               <ColorSlider color={this.state.color} opacity={this.state.opacity} onChange={this.onOpacityChanged}/>
               <ColorArch color={this.state.color} onChange={this.onColorChange}/>
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
  
  const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(PickerScreen);
  
  export default PickerScreen;