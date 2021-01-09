import React, {useState} from 'react';
import { Text, View, TextInput, FlatList } from 'react-native';
import styles from './styles';
import searchResults from '../../../assets/AirbnbAssets/search'
import Entypo from 'react-native-vector-icons/Entypo'
const DestinationSearch =()=>{

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
              <View style={styles.row}>
               <View style={styles.iconContainer}>
                   <Entypo 
                   name={'location-pin'}
                   size={25}/>
              </View>
               <Text style={styles.description}>
                   {item.description}
                </Text>
            </View>  
          )}
         />

       </View>
   )



}
export default DestinationSearch;