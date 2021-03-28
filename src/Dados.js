import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler';
import firebase from '../Firebaseconection';
import { useFonts, Amarante_400Regular } from '@expo-google-fonts/amarante';
import * as Location from 'expo-location'


import PropTypes from "prop-types"
import Icon from "react-native-vector-icons/FontAwesome"
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import getDirections from 'react-native-google-maps-directions'
import { PermissionsAndroid } from 'react-native';

import Geocoder from 'react-native-geocoding';

const Login = ({ navigation }) => {

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
      </View>
      <View style={style.header}>
        <Text>Colocar algo aqui!</Text>
      </View>
      

    </ScrollView>

    
  )
};


const style = StyleSheet.create({

  header: {
    backgroundColor: "#FBF8F8",
    height: "3%"

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