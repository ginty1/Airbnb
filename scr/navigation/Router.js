import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import  GuestsScreen from '../screens/Guests/index';
import DestinationSearch from '../screens/DestinationSearch/index';
import  HomeTabNavigator from '../HomeTabNavigator/homeTabNav'
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

                <Stack.Screen name={'Destination Search'}
                component={DestinationSearch}
                options={{
                    title:'Search Your Destination'
                }}/>


              <Stack.Screen
               name={'Guest'}
               component={GuestsScreen}
               options={
                   {
                       title:'how many people'
                   }
               } />


            </Stack.Navigator> 
          
        </NavigationContainer>
    )

}
export default Router;