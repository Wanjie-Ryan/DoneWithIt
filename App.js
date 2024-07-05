import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Button, Alert } from "react-native";


export default function App() {

  const handlePress = ()=>{
    console.log("Button pressed");
  }

  console.log("app is good");

  const handleImagePress = ()=>{
    console.log("Image pressed");
  }

 

  return (
    <View style={styles.container}>
      <Text  onPress={handlePress} >Hello wes gbrrkhgcvbnghjkl;crcyvubnyinofetyugkilocuiuof ghjkltgvbhnjnyguhiljotyuigubhinjovbhinjokgvkhijlnocyuiocfygvubhinjcgvubhiyubincgvyjbkhinjccubincfgvhbjfgkhbnjcfgvbhjnbhnjcyuhbij </Text>
      <TouchableHighlight onPress={handleImagePress}>

      <Image style ={styles.image} source={require('./assets/icon.png')}/>
      </TouchableHighlight>

      <Button color = "orange" title='click me' onPress={()=> Alert.alert('we alert', 'message', [
        {text:'yes'}
        ])}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  image:{
    width:200,
    height:200
  }
});
