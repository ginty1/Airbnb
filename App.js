import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './scr/screens/Home'
import Post from './scr/components/Post'



export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen/> */}
      <Post/>
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
