import React,{useState,useEffect} from 'react'
import {ImageBackground, StyleSheet,Text, View, Button,TextInput, TouchableOpacity,} from 'react-native';
import axios from 'axios'
const image = { uri: "https://reactjs.org/logo-og.png" };
export default function Home({navigation}) {
    const [logar,setLogar]=useState(null)
    const [senha,setSenha]= useState(null)
    const [senha1,setSenha1]= useState(null)

    //componentes do axios
    const [data,setdata]= useState(null)
    //fim do axios
    const cadastrar = () =>{
        console.log(logar,senha);
        var logar1=logar+senha;
        console.log(logar1); 
        //aqui inserir o código da api
            

    }
    function cadastro1(){
        console.log(logar,senha);
        if(logar!=null && senha!=null){
        var logar1='login:'+logar+'  senha:'+senha;
        
        console.log(logar1);
        setSenha1(logar1); 
        //navigation.navigate('Login',{id: logar,senha:senha})
       // axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
        
        axios.get(gett, {header:{'Access-Control-Allow-Origin:':'*'}}).then(response => {
            console.log(response.data);
            //this.setState({ data: response.data })
          }).catch(() => {
            console.log('Error retrieving data')
          })
        }
        else{
            var logar1='Por favor, insira caracteres válidos'
            setSenha1(logar1); 
        }

    }
    

    return (
        <View style={styles.container}>
             <ImageBackground source={require('../assets/fundo.png')} 
             
             style={styles.image}>
                <Text>{senha1}</Text>
            <TextInput style={styles.fundobranco}
            onChangeText={value =>setLogar(value)}
            >

            </TextInput>
            <Text>&nbsp;</Text>
            
            <TextInput style={styles.fundobranco}
            onChangeText={value =>setSenha(value)}
            >

            </TextInput >
           
            
            <View style={{flexDirection: 'row',justifyContent: "right"}}>
                
                <TouchableOpacity onPress={() => this.onLogin()}>
                    <View
                       style={{backgroundColor: 'none',borderRadius: 15,padding: 15,}}>

                      <Text style={{color: 'black', fontSize: 20,alignItems: 'right', fontWeight: '600'}}> Salvar Senha</Text>
                    </View>
                </TouchableOpacity>
                </View>
                 
            
            
            <Button
                    title='Acessar'
                    //onPress={() => navigation.navigate('Login',{id: 30})}
                onPress={()=> cadastro1()}
            />
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
  