import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler';
import firebase from '../Firebaseconection'


const Cadastro = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')

  const onChangeEmail = (txtEmail) => {
    setEmail(txtEmail)
  }
  const onChangePassword = (txtPassword) => {
    setPassword(txtPassword)
  }

  const onChangeConfPassword = (txtConfPassword) => {
    setConfPassword(txtConfPassword)
  }

  const cadastration = () => {
    if (confPassword == password) {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {

      }).catch(() => {
        window.alert("Fase de Demonstração")
      })
    } else (
      window.alert("Fase de Demonstração")
    )
  }

  return (

    <ScrollView style={style.container}>

      <View style={style.header} >
      <View style={{ alignItems: "center" }}>
          <View style={{ alignItems: "center" }}>
            <Text style={style.titulo1}>Travel Maker</Text>
            <Image style={{ height: 600, width: 600,opacity:0.3, alignSelf: "center",alignItems: "baseline"}} source={require("../img/globo.png")} />
          </View>
        </View>
      </View>

      <View style={style.login}>

        <View style={{ flex: 1, marginBottom: 20, marginTop: 20 }}>

          <View style={{ height: "50%" }}>

            <Text style={{ color: "white", fontSize: 28, marginLeft: 24 }}>Cadastro</Text>

            <View style={{ flex: 1, justifyContent: "space-around" }}>
              <TextInput style={style.input} placeholder="Email" placeholderTextColor="#fff" onChangeText={txtEmail => onChangeEmail(txtEmail)} />
              <TextInput style={style.input} placeholder="Senha" placeholderTextColor="#fff" onChangeText={txtPassword => onChangePassword(txtPassword)} />
              <TextInput style={style.input} placeholder="Confirme a Senha" placeholderTextColor="#fff" onChangeText={txtConfPassword => onChangeConfPassword(txtConfPassword)} />
              <TouchableHighlight onPress={() => { alert("Fase de Demonstração") }} underlayColor="#1E7987">
                {/*}Text style={{ alignSelf: "flex-end", color: "#fff", fontSize: 15, marginRight: "10%", marginTop: 10 }}>Esqueci minha senha</Text>*/}
              </TouchableHighlight>
            </View>

          </View>

          <View style={{ height: "13%", justifyContent: "flex-end", marginTop: 10 }} >
            <Button
              buttonStyle={style.botao}
              title="Cadastrar"
              onPress={cadastration}
              titleStyle={{ fontSize: 23 }}
            />
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
            <View style={{ backgroundColor: "#fff", height: 1, marginTop: 27, width: "15%" }}></View>
            <Text style={{ marginTop: 22, color: "#fff", fontSize: 15 }}>Entrar com</Text>
            <View style={{ backgroundColor: "#fff", height: 1, marginTop: 27, width: "15%" }}></View>
          </View>

          <View style={{ height: "20%", alignItems: "center", justifyContent: "center" }}>
            <Image style={{ backgroundColor: "#0080FF", height: 60, width: 60, borderRadius: 50 }} source={require("../icons/image_5.png")} />
          </View>

         {/*<View style={{ flexDirection: "row", alignSelf: "center", height: 30, justifyContent: "flex-end" }}>
            <Text >Nao possui conta?</Text>
            <TouchableHighlight >
              <Text style={{ color: "#EB6458", marginLeft: 5 }}>Cadastre-se</Text>
            </TouchableHighlight>
          </View>
        */} 
        </View>

      </View>

    </ScrollView>


  )
};

const style = StyleSheet.create({

  container1: {
    flexDirection: "column",
  },

  header: {
    backgroundColor: "#FBF8F8",
    alignItems: "center",
    justifyContent: "center",
    height: 226

  },

  titulo1: {
    fontSize: 55,
    color: "#5D6D7E"
  },

  titulo2: {

    fontSize: 50,
    color: "#5D6D7E"

  },

  loginIn: {

    marginLeft: 24

  },

  input: {
    //  backgroundColor:"#fff", 
    width: "80%",
    height: "20%",
    alignSelf: "center",
    borderBottomWidth: 1,
    borderColor: "#fff",
    fontSize: 20,

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
    height: 784

  }

})


export default Cadastro