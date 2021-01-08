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
             <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>
             <Text style={styles.description}
             numberOfLines={3}>Suppose that you are a young child who lives in a small rural town. Every day as you go to school,
                you watch as the buses pass. During summer break,
                 you visit your aunt who lives in a major city.
                  She takes you on a trip to the local railroad station so that you can watch the trains come and go.</Text> 
         {/* old price & new price */}
          <Text style={styles.prices}>
            <Text style={styles.oldPrice}>k250</Text>
            <Text style={styles.newPrice}> k200</Text>
            / night
          </Text>

          {/*  Total price */}
          <Text style={styles.totalPrice}>k450 total</Text>
        </View>
    )
}
export default Post;