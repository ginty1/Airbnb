import React from 'react';
import {View,Text, Image}  from 'react-native'
import styles from './styles'

const PostScreen=(props)=>{
  // receving properties from parent as an array of objects

  const post=props.post;
  

    return(
        <View style={styles.container}>
          {/* Image */}
          <Image 
          source={{uri:post.image}}
           style={styles.image}/>


          {/* bed and bedroom */}
    <Text style={styles.bedrooms}>{post.bedroom}</Text>
             <Text style={styles.description}
             numberOfLines={3}>
                {post.type}
                  {''}
                {post.title}</Text> 
         {/* old price & new price */}
          <Text style={styles.prices}>
            <Text style={styles.oldPrice}>{post.oldPrice}</Text>
            <Text style={styles.newPrice}> {post.newPrice}</Text>
            / night
          </Text>

          {/*  Total price */}
          <Text style={styles.totalPrice}>{post.totalPrice}</Text>
        </View>
    )
}
export default PostScreen;