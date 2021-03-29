import React, { useState, Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView, Button, TouchableOpacity } from 'react-native';
import { TapGestureHandler, TouchableHighlight } from 'react-native-gesture-handler';
import firebase from '../Firebaseconection';
import { useFonts, Amarante_400Regular } from '@expo-google-fonts/amarante';
import * as Location from 'expo-location'

import CheckBox from '@react-native-community/checkbox';
import PropTypes from "prop-types"
import Icon from "react-native-vector-icons/FontAwesome"
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import getDirections from 'react-native-google-maps-directions'
import { PermissionsAndroid } from 'react-native';

import Geocoder from 'react-native-geocoding';
import { Alert } from 'react-native';
import { render } from 'react-dom';


const Login = ({ navigation}) => {

  return (

    <ScrollView>
      
      <View style={style.header} >
         
        <View style={{ alignItems: "center" }}>
          <View style={{ alignItems: "center" }}>
            <Text style={style.titulo1}>Dados da Viajem</Text>
            <Image style={{ height: 600, width: 600,opacity:0.3, alignSelf: "center",alignItems: "baseline"}} source={require("../img/globo.png")} />
          </View>
        </View>

      </View>

      <View style={style.login}>
          <Text style={{ color: "white", fontSize: 28, alignSelf:"center" }}>Cadastro</Text>

          <View style={{ height: "3%", marginTop: 2, AlignItems: "center", }} >
            <TextInput style={style.botao2}
                placeholder='Origem' />
            <TextInput style={style.botao3}
                placeholder='Destino' />
            <TextInput style={style.botao3}
                placeholder='Ida: 00/00/0000 - Volta: 00/00/0000' />
            <TextInput style={style.botao3}
                placeholder='Quantidade de Passageiros' />
          </View>
        
          <Button
            onPress={() => {
              alert('Você conseguiu!');
            }}
            title="Deseja Completar o Cadastro"
          />
          
      </View>
    </ScrollView> 
  )
};


const style = StyleSheet.create({

  header: {
    backgroundColor: "#FBF8F8",
    height: "3%"

  },

  botao2: {
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#1A5276",
    width: "80%",
    height: "15%",
    backgroundColor: "#fff",
    color: 'black',
    borderRadius: 40,
  },

  botao3: {
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#1A5276",
    width: "80%",
    height: "15%",
    backgroundColor: "#fff",
    color: 'black',
    borderRadius: 40,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0080FF",
  },

  CheckBox: {
    width: 25,
    height: 25,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  WrapperCheckBox: {
    flexDirection: "row",
    alignItems: "center"
  },

  LabelCheck: {
    color: '#fff',
    marginLeft: 6 // Para que não fique colado ao checkbox
  },

  titulo1: {
    fontSize: 50,
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
    height: 10000
  },
  

})



export default Login