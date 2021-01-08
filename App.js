import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './scr/screens/Home'
import Post from './scr/components/Post'
import feed from './assets/AirbnbAssets/feed'

const post1=feed[0]

export default function App() {
  return (
    <View style={styles.container}>
      <Post post={post1}/>
    
      {/* <HomeScreen/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: 1,
  container: {
    backgroundColor: '#fff',
  },
});
