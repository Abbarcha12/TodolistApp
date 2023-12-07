import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import GoalItem from "../components/GoalItem";
export default function App() {
  const [data, setData] = useState("");
  const [goal, setgoals] = useState([]);

  const handleChange = (enteredText) => {
    setData(enteredText);
  };

  const handleClick = () => {
    setgoals((current) => [...current, {text:data,id:Math.random().toString()}]);
    setData("");
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textPlace}
          onChangeText={handleChange}
          placeholder='your Next goal'
        />
        <Button title='Add Goal' onPress={handleClick} />
      </View>
      <View style={styles.list}>
        <View>
          <FlatList
            data={goal}
            keyExtractor={(index,item)=>{
              return item.id
            }}
            renderItem={(itemData) => {
              return <GoalItem text={itemData.item.text} />
             
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderEndWidth: 1,
    borderBlockColor: "#cccc",
    flex: 1,
  },

  textPlace: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    borderRadius: 12,
  },
  list: {
    flex: 5,
  },
 
});
