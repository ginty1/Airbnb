import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import GuestsScreen from './scr/screens/Guests'
import Router from './scr/navigation/Router';
// const post1=feed[0]

export default function App() {
  return (
    <Router/>
  );
}

const styles = StyleSheet.create({
  flex: 1,
  container: {
    backgroundColor: '#fff',
  },
});
