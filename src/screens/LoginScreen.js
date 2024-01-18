import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import data from '../hooks/data';

const LoginScreen = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handlePressLogin = () => {
    const matchedUser = data.users.find(
      (user) => user.username === username && user.password === password
    );

    if (matchedUser) {
      handleLogin(); 
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity 
        style={styles.button} 
        onPress={handlePressLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#3498db',
    fontFamily: 'ArialRoundedMTBold'
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 5
  },
  button: {
    backgroundColor: '#3498db',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default LoginScreen;