import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    button:{
        borderWidth:1,
        width:30,
        height:30,
        borderRadius:15,
        justifyContent:"center",
        alignItems:'center',
        borderColor:'#676767',
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,borderWidth:1,
        borderColor:'lightgrey',
        marginHorizontal:20,}
})
export default styles;