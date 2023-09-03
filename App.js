import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [eurot, setEurot] = useState('')
  const [kruunu, setKruunu] = useState(0)

  const calculate = () =>{
    const result = eurot.replace(',','.')*11.85
    setKruunu(result)
  }
  
  (
    <View style={styles.container}>
      <Text>Eurot</Text>
      <TextInput
      placeholder='Kirjoita määrä euroina'
      keyboardType='decimal-pad'
      value={eurot}
      onChangeText={text => setEurot(text)}
      style={styles.field}
      />
<Text style={styles.field}>Kruunu</Text>
<Text style={styles.field}>{kruunu.toFixed(2)}</Text>
<Button title='Laske' onPress={calculate}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  field: {
    marginBottom: 10,
  }
});