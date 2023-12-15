import { StyleSheet,View ,Text,Pressable} from "react-native";

const GoalItem = (props) => {



  return (
    <View style={styles.listItem} > 
    <Pressable android_ripple={{color:"#210644"}} onPress={props.handleDelete.bind(this,props.id)}
    style={({pressData})=> pressData && pressItem}
    >
      <Text style={styles.itemStyle}>{props.text}</Text>
    </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressItem:{
opacity:0.5
  },
  itemStyle: {
    color: "white",
    padding:5
  },
});
