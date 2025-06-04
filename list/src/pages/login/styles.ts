import { Dimensions, ImageBackground, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:60,
        

        
    },
    boxTop:{
        
        marginTop:-120,
        alignItems:'center',
        justifyContent: 'center',
        
    },

        boxTop2:{
        height:200,
        width: '100%',
        alignItems:'center',
        justifyContent: 'center',
        
        

    },
    boxMid:{
        height:200,
        width: '100%',
        alignItems:'center',
        justifyContent: 'center',
        marginTop:30,
    },

    boxMidText:{
        fontSize:32,
        fontFamily: 'Inter-Regular',
        marginTop:70,
        fontWeight:'700',
    },

    boxBottom:{
        width: '100%',
         alignItems:'center',
        justifyContent: 'center',
        borderWidth:1,
        height:70,
        borderRadius:20,
        backgroundColor:'#fffff'
    }
    
    
});
