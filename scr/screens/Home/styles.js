import{StyleSheet,Dimensions}from 'react-native';

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:450,
        resizeMode:'cover',
        justifyContent:'center',
    },
    tittle:{
       fontSize:80,
       fontWeight:'bold',
       color:'white',
       width:'70%',
       marginLeft:20,
    },
    button:{
        backgroundColor:'#fff',
        width:195,
        marginLeft:20,
        height:40,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',


    },
    buttonText:{
        fontSize:16,
        fontWeight:'bold',

    },
    searchButton:{
        backgroundColor:'#fff',
        height:50,
        width:Dimensions.get('window').width-20,
        marginHorizontal:10,
        flexDirection:'row',
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:30,
        zIndex:1,
        },
    searchButtonText:{
        fontSize:16,
        fontWeight:'bold',
    },
})
export default styles;