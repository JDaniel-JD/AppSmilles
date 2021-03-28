import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler';
import firebase from '../Firebaseconection';
import { useFonts, Amarante_400Regular } from '@expo-google-fonts/amarante';

const Login = ({ navigation }) => {


  const fontsLoaded = useFonts({
    Amarante_400Regular,
  })
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeEmail = (txtEmail) => {
    setEmail(txtEmail)
  }
  const onChangePassword = (txtPassword) => {
    setPassword(txtPassword)
  }
  const login = () => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      navegacao()
    }).catch(() => {
      window.alert("Fase de Demonstração")
    })
  }

  const navegacao = () => {
    navigation.navigate("Bemvindo")

  }


  return (

    <ScrollView>

      <View style={style.header} >
         
        <View style={{ alignItems: "center" }}>
          <View style={{ alignItems: "center" }}>
            <Text style={style.titulo1}>Travel Maker</Text>
            <Image style={{ height: 600, width: 600,opacity:0.3, alignSelf: "center",alignItems: "baseline"}} source={require("../img/globo.png")} />
          </View>
        </View>

      </View>

      <View style={style.login}>

        <Text style={{ color: "white", fontSize: 28, marginLeft: 24 }}>Login</Text>

        <View style={{ marginTop: 7 }}>
          <TextInput onChangeText={txtEmail => onChangeEmail(txtEmail)} style={style.input} placeholder="Email" placeholderTextColor="#fff" />
          <TextInput onChangeText={txtPassword => onChangePassword(txtPassword)} style={style.input} placeholder="Senha" placeholderTextColor="#fff" />
          <TouchableHighlight onPress={() => navigation.navigate("Dados")} underlayColor="#1E7987">
            <Text style={{ alignSelf: "flex-end", color: "#fff", fontSize: 15, marginRight: "10%", marginTop: 10 }}>Esqueci minha senha</Text>
          </TouchableHighlight>
        </View>

        <View style={{ height: "13%", justifyContent: "flex-end", marginTop: 30 }} >
          <Button
            buttonStyle={style.botao}
            title="Entrar"
            onPress={login}
          />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
          <View style={{ backgroundColor: "#fff", height: 1, marginTop: 27, width: "15%" }}></View>
          <Text style={{ marginTop: 22, color: "#fff", fontSize: 15 }}>Entrar com</Text>
          <View style={{ backgroundColor: "#fff", height: 1, marginTop: 27, width: "15%" }}></View>
        </View>

        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image style={{ backgroundColor: "#0080FF", height: 50, width: 50, borderRadius: 40, marginBottom: 15, marginTop: 15 }} source={require("../icons/image_5.png")} />
        </View>

        <View style={{ flexDirection: "row", alignSelf: "center", flex: 1, justifyContent: "flex-end", marginBottom: 100 }}>
          <Text >Nao possui conta?</Text>
          <TouchableHighlight onPress={() => navigation.navigate('Cadastro')}>
            <Text style={{ color: "#fff", marginLeft: 5 }}>Cadastre-se</Text>
          </TouchableHighlight>
        </View>

      </View>

    </ScrollView>
  )
};


const style = StyleSheet.create({

  header: {
    backgroundColor: "#FBF8F8",
    height: "30%"

  },

  titulo1: {
    fontSize: 70,
    color: "#0080FF",
    alignItems: "center",
    alignSelf: "center",
    // fontFamily: { fontsLoaded }
  },

  loginIn: {
    marginLeft: 24
  },

  input: {
    //  backgroundColor:"#fff", 
    width: "80%",
    alignSelf: "center",
    borderBottomWidth: 1,
    borderColor: "#fff",
    fontSize: 20,
    marginTop: 50
  },

  botao: {
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#1A5276",
    width: "80%",
    height: "80%",
    borderRadius: 40,
  },

  login: {
    backgroundColor: "#0080FF",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    paddingTop: 10,
    paddingBottom: 50,
    height: 700
  }

})



export default Login