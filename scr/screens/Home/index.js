import React from 'react';
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import { 
    View, 
    ImageBackground,
    Text,
     Pressable,
     } from 'react-native'
const HomeScreen=(props)=>{
    const navigation=useNavigation();
    return(
        <View>
         <Pressable 
          style={styles.searchButton}
         onPress={()=>navigation.navigate('Destination Search')}>
             <Fontisto name={'search'} size={25} color={"#f15454"}/>
             <Text
             style={styles.searchButtonText}>
                 Where are you going?</Text>
         </Pressable>



         <ImageBackground
          source={require('../../../assets/images/wallpaper.jpg')} 
         style={styles.image}>
         
        <Text style={styles.tittle}>Go Near</Text>
        <Pressable 
         style={styles.button}
         onPress={()=>console.warn('Explore Btn clicked')}
         >
             <Text
              style={styles.buttonText}>
                  Explore Nearby Stays</Text>
         </Pressable>


         </ImageBackground>
                  
        {/* Button */}
        </View>
    )
}
export default HomeScreen;