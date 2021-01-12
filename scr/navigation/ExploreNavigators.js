import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import searchReasults from '../screens/searchReasults';
import SearchResultsTabNavigator from './SearchResultsTabNavigator';

const Stack=createStackNavigator();

const Router=(props)=>{
    return(
        <Stack.Navigator>

<Stack.Screen
            name={'SearchResults'}
            component={SearchResultsTabNavigator}
            options={{
                title:'Search your destination'
            }}/>

            <Stack.Screen
            name={'Welcome'}
            component={HomeScreen}
            options={{
                headerShown:false
            }}/>

            
        </Stack.Navigator>
    )
}
export default Router;