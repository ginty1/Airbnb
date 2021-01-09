import React,{useState} from 'react';
import { View,Text,Pressable } from 'react-native';
import styles from './styles'

const GuestsScreen=(props)=>{
    const[adults,setAdults]=useState(0);
    const[children,setChildren]=useState(0);
    const[infants,setInfants]=useState(0);
    return (
        <View>
         {/* Row 1: Adults */}
         <View style={styles.row}>
         <View>
             <Text style={{fontWeight:'bold'}}>Adurts</Text>
             <Text style={{color:'#8d8d8d'}} >Ages 13 or above</Text>
         </View>
         <View style={{flexDirection:'row',
           alignItems:'center',
        }}>
             <Pressable
             style={styles.button}
             onPress={()=>
                setAdults(Math.max(0,adults-1))}>
              <Text style={{ color:'#474747',
              fontSize:20,
            }}>-</Text>
             </Pressable>
             <Text style={
                 {marginHorizontal:20, 
                    fontSize:16,}}>{adults}</Text>
             <Pressable
             style={styles.button}
             onPress={()=> 
                setAdults(adults + 1)}>
              <Text style={{fontSize:20,
            color:'#474747'}}>+</Text>
             </Pressable>
         </View>
         </View>
         
         {/* Row 2: Children */}
         <View style={styles.row}>
         <View>
             <Text style={{fontWeight:'bold'}}>Children</Text>
             <Text style={{color:'#8d8d8d'}} >Ages 2-12 or above</Text>
         </View>
         <View style={{flexDirection:'row',
           alignItems:'center',
        }}>
             <Pressable
             style={styles.button}
             onPress={()=>
                setChildren(Math.max(0,children-1))}>
              <Text style={{ color:'#474747',
              fontSize:20,
            }}>-</Text>
             </Pressable>
             <Text style={
                 {marginHorizontal:20, 
                    fontSize:16,}}>{children}</Text>
             <Pressable
             style={styles.button}
             onPress={()=> 
                setChildren(children + 1)}>
              <Text style={{fontSize:20,
            color:'#474747'}}>+</Text>
             </Pressable>
         </View>
         </View>
         
         {/* Row 3: infants*/}
         <View style={styles.row}>
         <View>
             <Text style={{fontWeight:'bold'}}>Infants</Text>
             <Text style={{color:'#8d8d8d'}} >Under 2</Text>
         </View>
         <View style={{flexDirection:'row',
           alignItems:'center',
        }}>
             <Pressable
             style={styles.button}
             onPress={()=>
                setInfants(Math.max(0,infants-1))}>
              <Text style={{ color:'#474747',
              fontSize:20,
            }}>-</Text>
             </Pressable>
             <Text style={
                 {marginHorizontal:20, 
                    fontSize:16,}}>{infants}</Text>
             <Pressable
             style={styles.button}
             onPress={()=> 
                setInfants(infants + 1)}>
              <Text style={{fontSize:20,
            color:'#474747'}}>+</Text>
             </Pressable>
         </View>
         </View>
         {/* Row 1: Adults */}
        </View>
    )
}
export default GuestsScreen;