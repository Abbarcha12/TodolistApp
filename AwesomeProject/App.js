import {  Button, FlatList, StyleSheet,  View } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalsInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";
export default function App() {
  const [show,setShow]=useState(false)

  const [goal, setgoals] = useState([]);


const handleShow =()=>{
  setShow(true)
}


const closeShow =()=>{
  setShow(false)
}
  const handleClick = (newData) => {
    setgoals((current) => [
      ...current,
      {
        text: newData,
        id: Math.random().toString(),
      },
    ]);
    closeShow()
  };

  const deleteGoalHandler=(id)=>{
    setgoals((latest)=>{
      return latest.filter((item)=> item.id !== id)
    })
  }

  return (
   <>
   <StatusBar/>
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#5e0acc" onPress={handleShow}/>
      <GoalsInput  handleClick={handleClick} show={show} closeShow={closeShow} />
      <View style={styles.list}>
        <View>
          <FlatList
            data={goal}
            renderItem={(itemData) => {
              return <GoalItem text={itemData.item.text}  id={itemData.item.id}  handleDelete={deleteGoalHandler}  />;
            }}
            keyExtractor={(item,index ) => {
              return item.id;
            }}
            
           
          />
        </View>
      </View>
    </View>
   </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
   
    paddingTop: 70,
    flex:5,
    paddingHorizontal: 16,
  },
  



  list: {},
});
