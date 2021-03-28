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

        <View style={style.simbolo}>
          <Image source={require("../icons/simbolo.png")} />
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={style.titulo1}>Nome da</Text>
          <Text style={style.titulo2}>Aplicação</Text>
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
          <Image style={{ backgroundColor: "#fff", height: 60, width: 60, borderRadius: 50, marginBottom: 20, marginTop: 20 }} source={require("../icons/image_5.svg")} />
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

  simbolo: {
    height: "20%",
    alignItems: "baseline",
    justifyContent: "center",
    alignItems: "baseline",
    paddingLeft: 30,

  },

  header: {
    backgroundColor: "#FBF8F8",
    height: "30%"

  },

  titulo1: {
    fontSize: 55,
    color: "#5D6D7E",
    // fontFamily: { fontsLoaded }
  },

  titulo2: {
    fontSize: 50,
    color: "#5D6D7E",
    fontFamily: 'Amarante_400Regular'
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
    backgroundColor: "#2E4053",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    paddingTop: 10,
    paddingBottom: 50,
    height: 700
  }

})



export default Login