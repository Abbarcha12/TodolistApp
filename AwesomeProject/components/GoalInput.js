import { TextInput, Button, View, StyleSheet, Modal, Image } from "react-native";
import { useState } from "react";
const GoalsInput = (props) => {
  const [data, setData] = useState("");
  const handleChange = (enteredText) => {
    setData(enteredText);
  };

  function addGoalHandler() {
    props.handleClick(data);
    setData(" ");
  }
  return (
    <View style={styles.containerTop}>
        <Modal visible={props.show} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput
          value={data}
          style={styles.textPlace}
          onChangeText={handleChange}
          placeholder='your Goals'
        />
        <View style={styles.ButtonContainer}>
        <View style={styles.Button}>
            <Button title='cancel' onPress={props.closeShow} color="#f31282"/>
          </View>
          <View style={styles.Button}>
            <Button title='Add Goal' onPress={addGoalHandler} color="#5e0acc" />
          </View>
        
        </View>
      </View>
    </Modal>
    </View>
  );
};

export default GoalsInput;
const styles = StyleSheet.create({
    containerTop:{
       backgroundColor:"#000"
    },
  inputContainer: {
    
    flex: 1,
    justifyContent: "center ",
    alignItems: "center",
    paddingTop: 50,
    backgroundColor:'#311b6b'
  },
  textPlace: {
    borderWidth:.5,
    borderColor: "#cccccc",
    width: "85%",
    marginRight: 8,
    borderRadius: 8,
    paddingLeft: 20,
    paddingBottom: 10,
    paddingTop: 10,
    color:"#120438",
    backgroundColor:"#e4d0ff"
  },

  ButtonContainer: {
    flexDirection: "row",
  },
  image:{
    height:100,
    width:  100,
    margin:20
  },

  Button: {
    marginTop:30,
    width:"35%",
    marginHorizontal: 8,
  },
});
