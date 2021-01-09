import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './scr/screens/Home'
import Post from './scr/components/Post'
import feed from './assets/AirbnbAssets/feed'
import SearchReasultsScreen from './scr/screens/searchReasults';
import SearchResultsScreen from './scr/screens/searchReasults';
import DestinationSearch from './scr/screens/DestinationSearch'
import GuestsScreen from './scr/screens/Guests'
// const post1=feed[0]

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Post post={post1}/> */}
    
      {/* <HomeScreen/> */}
          {/* <DestinationSearch/> */}

          <GuestsScreen/>
       {/* <SearchResultsScreen/> */}

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
