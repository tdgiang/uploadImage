import React, { Component } from 'react';
import { View,Text,Button,Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};



export default class index extends Component {

    constructor(props){
        super(props);
        this.state={
            avatarSource:""
        }
    }

    pickerShow=()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                 
              this.setState({
                avatarSource: source,
              });
            }
          });
    }


    render() {
        let img=this.state.avatarSource==""?null:<Image
            source={this.state.avatarSource}
            style={{width:200,height:200}}
        />
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
                <Button 
                    onPress={this.pickerShow.bind(this)}
                    title={"Picker Image"}
                    style={{width:100,height:40,backgroundColor:'red',alignItems:'center',justifyContent:'center'}} 
                />

                {img}
               
            </View>            
        );
    }
}