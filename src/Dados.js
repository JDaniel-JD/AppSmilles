import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler';
import DatePicker from "react-native-datepicker"
import { useNavigation } from "@react-navigation/native"


const Dados = () => {

  const navigation = useNavigation()

  const [ida, setIda] = useState('')
  const [volta, setVolta] = useState('')
  const [imagem, setImagem] = useState('')


  const HandIf = () => {
    navigation.navigate('Bemvindo', { ida: ida, volta: volta, imagem: imagem })
  }

  return (

    <ScrollView style={style.container}>

      <View style={style.header} >

        <Image source={require("../icons/simbolo.png")} />
        <Text style={{ fontSize: 28, color: "#5D6D7E", textAlign: "center" }}>Dados da Viagem</Text>
        <Text style={{ fontSize: 28, color: "#5D6D7E", textAlign: "center" }}></Text>

      </View>

      <View style={style.login}>

        <View style={{ flex: 1, marginBottom: 20, marginTop: 20, }}>

          <View style={style.input}>
            <TextInput style={{ borderBottomWidth: 1, borderColor: "#fff", fontSize: 20, height: "30%", marginBottom: 20 }} placeholder="Lugar" placeholderTextColor="#fff" onChangeText={txtEmail => onChangeEmail(txtEmail)} />
            <DatePicker onDateChange={(e) => { setIda(e) }} style={{ borderBottomWidth: 1, borderColor: "#fff", fontSize: 20, height: "30%", width: "100%" }} date={ida} format="DD-MM-YYYY" />
            <DatePicker onDateChange={(e) => { setVolta(e) }} style={{ borderBottomWidth: 1, borderColor: "#fff", fontSize: 20, height: "30%", width: "100%" }} date={volta} format="DD-MM-YYYY" />
          </View>

          <View style={{ height: "50%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

            <View style={{ flexDirection: "column" }}>
              <TouchableHighlight onPress={() => { setImagem(require('../icons/praia.png')) }} style={{ margin: 10, borderRadius: 20 }} underlayColor="#1E7987">
                <Image source={require("../icons/praia.png")} />
              </TouchableHighlight>
              <TouchableHighlight onPress={() => { setImagem(require("../icons/inverno.png")) }} style={{ margin: 10, borderRadius: 20 }} underlayColor="#1E7987">
                <Image source={require("../icons/inverno.png")} />
              </TouchableHighlight>
            </View>

            <View style={{ flexDirection: "column" }}>

              <TouchableHighlight onPress={() => { setImagem(require("../icons/montanha.png")) }} style={{ margin: 10, borderRadius: 20 }} underlayColor="#1E7987">
                <Image source={require("../icons/montanha.png")} />
              </TouchableHighlight>

              <TouchableHighlight onPress={() => { setImagem(require("../icons/cidade.png")) }} style={{ margin: 10, borderRadius: 20 }} underlayColor="#1E7987">
                <Image source={require("../icons/cidade.png")} />
              </TouchableHighlight>

            </View>

          </View>

          <View style={{ flex: 1, justifyContent: "center" }} >
            <Button
              buttonStyle={style.botao}
              titleStyle={{ fontSize: 23 }}
              onPress={HandIf}
              title={"Criar Viagem"}
            />
          </View>

        </View>

      </View>

    </ScrollView>

  )
};

const style = StyleSheet.create({

  container1: {
    flexDirection: "column",
    height: "100%"
  },

  header: {
    flexDirection: "row",
    backgroundColor: "#FBF8F8",
    height: "15%",
    alignItems: "baseline",
    justifyContent: "space-around",
    paddingTop: 30

  },

  simbolo: {
    alignItems: "baseline",
    justifyContent: "center",
    alignItems: "baseline",

  },

  input: {
    //  backgroundColor:"#fff", 
    width: "80%",
    height: "20%",
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 30

  },

  botao: {
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#EB6458",
    width: "80%",
    height: "55%",
    borderRadius: 40,

  },

  login: {
    backgroundColor: "#1E7987",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    height: 784

  }

})


export default Dados