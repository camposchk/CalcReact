import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react'; 
import { useHistory } from './Context';

export default function Calc(props) {0
  const { addEntry } = useHistory();
  const Stack = createStackNavigator()
  const [text, setText] = useState('')

  const handlePress = (value) => { 
    setText(prevText => prevText + value); 
  };

  const handlePress2 = () => { 
    try {
      // Verificar se a expressão é segura
      if (/^[0-9+\-*/.]+$/.test(text)) {
        let res = eval(text); 
        setText(String(res));
        addEntry(`${text} = ${res}`);
      } else {
        setText("Erro");
      }
    } catch (error) {
      setText("Erro");
    }
  };

  const clearText = () => { // Função para limpar o texto
    setText('');
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.container}>
        <Text style={{ display: 'flex', alignItems: 'flex-end' }}>{text}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Pressable style={styles.signs} onPress={() => handlePress('+')}>
          <Text style={styles.signText}>+</Text>
        </Pressable>
        <Pressable style={styles.signs} onPress={() => handlePress('-')}>
          <Text style={styles.signText}>-</Text>
        </Pressable>
        <Pressable style={styles.signs} onPress={() => handlePress('/')}>
          <Text style={styles.signText}>/</Text>
        </Pressable>
        <Pressable style={styles.signs} onPress={() => handlePress('*')}>
          <Text style={styles.signText}>x</Text>
        </Pressable>
        <Pressable style={styles.signs} onPress={() => handlePress2()}>
          <Text style={styles.signText}>=</Text>
        </Pressable>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 40}}>
        <Pressable style={styles.signs} onPress={() => handlePress('1')}>
          <Text style={styles.signText}>1</Text>
        </Pressable>
        <Pressable style={styles.signs} onPress={() => handlePress('2')}>
          <Text style={styles.signText}>2</Text>
        </Pressable>
        <Pressable style={styles.signs} onPress={() => handlePress('3')}>
          <Text style={styles.signText}>3</Text>
        </Pressable>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Pressable style={styles.signs} onPress={() => handlePress('4')}>
          <Text style={styles.signText}>4</Text>
        </Pressable>
        <Pressable style={styles.signs} onPress={() => handlePress('5')}>
          <Text style={styles.signText}>5</Text>
        </Pressable>
        <Pressable style={styles.signs} onPress={() => handlePress('6')}>
          <Text style={styles.signText}>6</Text>
        </Pressable>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Pressable style={styles.signs} onPress={() => handlePress('7')}>
          <Text style={styles.signText}>7</Text>
        </Pressable>
        <Pressable style={styles.signs} onPress={() => handlePress('8')}>
          <Text style={styles.signText}>8</Text>
        </Pressable>
        <Pressable style={styles.signs} onPress={() => handlePress('9')}>
          <Text style={styles.signText}>9</Text>
        </Pressable>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Pressable style={styles.signs} onPress={() => handlePress('0')}>
          <Text style={styles.signText}>0</Text>
        </Pressable>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', width: 300, marginTop: 10}}>
        <Pressable style={styles.buttons} onPress={clearText}>
          <Text style={styles.signTextBtn}>Limpar</Text>
        </Pressable>
        <Pressable style={styles.buttons}>
          <Text style={styles.signTextBtn} onPress={() => props.navigation.navigate("Hist")}>Histórico</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1, 
    borderColor: 'black',
    borderRadius: 10, 
    height: 80, 
    width: 300, 
    padding: 10, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  signs: {
    backgroundColor: 'lightgray',
    height: 50, 
    width: 50, 
    borderRadius: 10, 
    margin: 5 
  },
  signText: {
    textAlign: 'center',
    fontSize: 30
  },
  signTextBtn: {
    fontSize: 20
  },
  buttons: {
    backgroundColor: 'lightgray',
    height: 50,
    width: 100,
    borderRadius: 10,
    margin: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});