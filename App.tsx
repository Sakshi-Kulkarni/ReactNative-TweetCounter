import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
 
const char_limit = 280;

const App = () => {

  const [limit, setlimit] = useState('');
  const char_left = char_limit - limit.length;


  let color;
  let bgcolor;
  if (char_left < 0) {
    color = 'red';
    bgcolor = 'pink';
  } else if (char_left <= 10) {
    color = 'yellow';
    bgcolor = '#fcf39d';
  }

  const handleChange = (Character: string) => {
    setlimit(Character);
  };

  const styles = StyleSheet.create({
    container: {
      paddingTop: 150
    },
    input: {
      margin: 20,
      padding: 15,
      height: 290,
      borderColor: color,
      backgroundColor: bgcolor,
      borderWidth: 4,
      borderRadius: 20
    },
    line: {
      textAlign: 'center',
      fontSize: 25,
      color: color
    }
  });
  return (
    <View style={styles.container}>
      <TextInput
        editable={true}
        numberOfLines={5}
        multiline={true}
        style={styles.input}
        onChangeText={val => handleChange(val)}
       />

      <Text style={styles.line}>{char_left}  Character Remaining </Text>
    </View>
  );
}
export default App;