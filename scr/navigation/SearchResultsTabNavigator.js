import React from 'react';
import { View,Text } from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/searchReasults'
const SearchResultsTabNavigator=(props)=>{
     const TopTab=createMaterialTopTabNavigator();

    return(
         <TopTab.Navigator
         tabBarOptions={{
             activeTintColor:'#f15454',
             indicatorStyle:{
                 backgroundColor:'#f15454'
             }
         }}
         >
             <TopTab.Screen 
             name={'list'}
             component={SearchResults}/>
             <TopTab.Screen 
             name={'Map'}
             component={SearchResults}/>
         </TopTab.Navigator>
    );
}
export default SearchResultsTabNavigator;