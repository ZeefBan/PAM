import { View,Image,Text,TouchableOpacity,StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import React,{ Fragment } from "react";
 


export default function Botao({Logo,texto,cor,Logo2,texto2,cor2}){
  
    return(

        <View style={estilo.containerBotoes1}>

        <TouchableOpacity style={[estilo.botoes ,{backgroundColor:cor}]}>
        <Ionicons name={Logo} size={24} color="white"
        style={{marginRight:10}}/>
        <Text style ={estilo.textoBotao}> {Texto} </Text>

        </TouchableOpacity>
        <TouchableOpacity style={[estilo.botoes ,{backgroundColor:cor2}]}>
        <Ionicons name={Logo2} size={24} color="white"
        style={{marginRight:10}}/>
        <Text style ={estilo.textoBotao}> {Texto2} </Text>

        </TouchableOpacity>
    </View>

     
    );


}
const estilo = StyleSheet.create( {

    containerBotoes1: {
        flexDirection:'row',
        marginBottom:8,
        justifyContent: "center"

    },
    textoBotao:{ 
        color:'white',
        fontWeight:'bold'
    },
    botoes:{

        padding:5,
        marginHorizontal:'bold',
        width:'45%',
        alignItems:'center',
        justifyContent: 'flex-start',

        fontSize:12,
        color:'white',
        flexDirection:'row',
    }

    

})