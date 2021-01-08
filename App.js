import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Feather from 'react-native-vector-icons/Fontisto';
import HomeScreen from './scr/screens/Home'

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
      <Feather name="blind"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
