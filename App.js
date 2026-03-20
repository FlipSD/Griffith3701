import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> My Todo List</Text>
      </View>
        <View style={styles.listContainer}>
        <TodoItem text="Buy groceries" onPress={() => console.log('Todo item was pressed')} />
        <TodoItem text="Walk the dog" onPress={() => console.log('Todo item was pressed')} />
        <TodoItem text="Finish React Native project" onPress={() => console.log('Todo item was pressed')} />
        <TodoItem text="Sup Dude" onPress={() => console.log('Todo item was pressed')} />
        </View>
      <AddButton onPress={() => console.log('Add Todo button was pressed')} />
      <StatusBar style="auto" />
    </View>
  );
}
const AddButton = ({onPress}) => {
  return(
    <TouchableOpacity
      style={styles.addButton}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <Text style={styles.buttonText}> Add New Todo </Text>
    </TouchableOpacity>
  )  
};
const TodoItem = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.listItem}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttonText:{
    color: 'rgb(0, 0, 0)',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  addButton: {
    backgroundColor: 'rgb(62, 201, 120)',
    borderWidth: 5, //Thickness
    borderColor: 'rgb(0, 0, 0)',
    borderRadius: 5, //Makes the corners rounded
    padding: 10, //Spacing within the border
    marginTop: 'auto',
    marginBottom: '30',
    width: '90%', //Makes the button stretch across the screen
  },

  title: {
    color: 'rgb(62, 201, 120)', 
    fontSize: 26,
    fontWeight: 'bold',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textDecorationLine: 'underline',
    textDecorationColor: 'rgb(78, 255, 152)',
    textDecorationStyle: 'solid',
  },

  titleContainer: {
    backgroundColor: 'rgb(190, 190, 190)',
    borderWidth: 5,
    borderColor: 'rgb(0, 0, 0)',
    borderRadius: 5, 
    padding: 10,
    marginBottom: 10, 
    marginTop: 55,
  },

  listContainer: {
    backgroundColor: 'rgb(255, 255, 255)',
    borderWidth: 5,
    borderColor: 'rgb(0, 0, 0)',
    borderRadius: 5, 
    padding: 5,
    marginBottom: 10, 
    width: '90%',
    justifyContent: 'center',
  },
  listItem:{
    fontSize: 18,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(0, 0, 0)',
  }
});
