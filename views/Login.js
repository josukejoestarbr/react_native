import React from 'react';
import { ImageBackground, StyleSheet,Text, View,Button, TouchableOpacity} from 'react-native';
function retornar(navigation){
  
  navigation.navigate('Home')
  

}
export default function Login({route,navigation})
{
    return(
      <View style={styles.container}>
         <ImageBackground source={require('../assets/fundo.png')} 
             
             style={styles.image}>
          <Text>Esse é o componente Login do sistema {route.params.id}. Esse é o componente password do sistema {route.params.senha}</Text>

          
            <View style={{flexDirection: 'row',justifyContent: "right"}}>
                
                <TouchableOpacity onPress={()=> retornar(navigation)}>
                    <View
                       style={{backgroundColor: 'none',borderRadius: 15,padding: 15,}}>

                      <Text style={{color: 'blue', fontSize: 20,alignItems: 'right', fontWeight: '600'}}> Retornar</Text>
                    </View>
                </TouchableOpacity>
                </View>
          </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
  teste: {
      marginTop:15,
      width:350,
      alignItems: 'center',
      backgroundColor:'black'
    },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width:400,
    height:800,
    justifyContent: "center"
  },
  fundobranco:{
      height:40,
      backgroundColor: "white"
  },
  direita:{
      textAlign: "right",
      width:40,

  },
  text: {
    color: "white",
    fontSize: 20,
    lineHeight: 16,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    //flexDirection: 'row',
  }
});