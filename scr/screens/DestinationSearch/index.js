import React, {useState} from 'react';
import { Text, View, TextInput, FlatList,Pressable } from 'react-native';
import styles from './styles';
import searchResults from '../../../assets/AirbnbAssets/search';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
const DestinationSearchScreen =()=>{
 const navigation=useNavigation();

  const [inputText, setInputText]=useState('');

   return(
       <View style={styles.container}>
           {/* Inpunt component */}
           <TextInput
           style={styles.textInpunt}
           placeholder='where are you going?'
           value={inputText}
           onChangeText={setInputText}
           />
       <FlatList
         data={searchResults}
          renderItem={({item})=> 
          (
              <Pressable style={styles.row}
              onPress={()=>navigation.navigate('Guest')}>

               <View style={styles.iconContainer}>
                   <Entypo 
                   name={'location-pin'}
                   size={25}/>
              </View>
               <Text style={styles.description}>
                   {item.description}
                </Text>
            </Pressable>  
          )}
         />

       </View>
   )



}
export default DestinationSearchScreen;