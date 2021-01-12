import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import  GuestsScreen from '../screens/Guests/index';
import  HomeTabNavigator from './homeTabNav'
import DestinationSearchScreen from '../screens/DestinationSearch';
import PostScreen from '../../scr/components/Post';


const Stack= createStackNavigator();

const Router=(props)=>{

    return(
        <NavigationContainer>
              <Stack.Navigator>
             <Stack.Screen name={'Home'}
             component={HomeTabNavigator}
             options={{
                 headerShown:false
             }}/>
             

             <Stack.Screen
               name={'Destination Search'}
               component={DestinationSearchScreen}
               options={{
               title:'Search Your Destination'}}/>


              <Stack.Screen
               name={'Guest'}
               component={GuestsScreen}
               options={
                   {
                       title:'how many people'
                   }
               } />

              <Stack.Screen
               name={'Post'}
               component={PostScreen}
               options={
                   {
                       title:'Accomodation'
                   }
               } />


            </Stack.Navigator> 
            </NavigationContainer>
        
    )

}
export default Router;