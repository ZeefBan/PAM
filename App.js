import {View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import Cabecalho from './src/components/Cabecalho/Cabecalho';
import Botao from './src/components/botoes/Index';




export default function App(){

    return(
       <View>
           <Cabecalho>
           <Botao
           Logo="game"
           texto="Jogos"
           cor="green"
               />        
                
           </Cabecalho> 
        
       </View>

    );
  }

  const estilo = StyleSheet.create( {

      header: {

          backgroundColor:'#002333',

          borderRadius:2,

          marginTop:8,

          width:'99,9%',

          padding:20,

          margin:2,

          alignItems:'center',

          flexDirection:'row',

          justifyContent: 'space-between',

          marginBottom:20

      },

      Texto:{

          color:'white',

          marginLeft:-120,

          fontSize:20,

          fontWeight:'bold'

      }

  })