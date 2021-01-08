import React from 'react';
import {View,Text, Image}  from 'react-native'
import styles from './styles'

const Post=(props)=>{
    return(
        <View style={styles.container}>
          {/* Image */}
          <Image 
            source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'}}
           style={styles.image}/>


          {/* bed and bedroom */}


          {/* old price & new price */}


          {/*  Total price */}
        </View>
    )
}
export default Post;