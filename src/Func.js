import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, SafeAreaViewComponent } from 'react-native';
import { Appbar, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

const Func = ({ navigation, route }) => {

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
  const [ida, setIda] = useState(route.params.ida)
  const [volta, setVolta] = useState(route.params.volta)
  const [imagem, setImagem] = useState(route.params.imagem)
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState();
  const [text, setText] = useState();
  const [longitude, setLongitude] = useState();
  const [regiao, setRegiao] = useState()

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      if (errorMsg) {
        setText(errorMsg);
      } else if (location) {
        setRegiao({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.33,
          longitudeDelta: 0.041,
        })
      }
    })();
  }, []);


  const navGastos = () => {
    navigation.navigate("Gastos")

  }

  const navArquivos = () => {
    navigation.navigate("Arquivos")

  }

  return (

    <ScrollView>

      <View style={style.header} >
        <Image source={require("../icons/simbolo.png")} />
        <Text style={{ fontSize: 28, color: "#1E7987", textAlign: "center" }}>Viagem</Text>
        <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
      </View>

      <Card style={style.card}>
        <Card.Cover style={style.imagem} source={imagem} />
        <Card.Content>
          <Title>Card title</Title>
          <View style={style.datas}>
            <Paragraph>{ida}</Paragraph>
            <Paragraph> até </Paragraph>
            <Paragraph> {volta} </Paragraph>
          </View>
        </Card.Content>
      </Card>

      <View style={style.grupo}>

        <TouchableOpacity style={style.opcao} onPress={navGastos} >
          <Image style={style.iconi} source={require("../icons/image_8.png")} />
          <Text style={style.textoOpcao}> Gastos </Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.opcao} onPress={navArquivos} >
          <Image style={style.iconi} source={require("../icons/image_9.png")} />
          <Text style={style.textoOpcao}> Arquivos </Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.opcao} >
          <Text style={style.textoOpcao}> Gastos </Text>
        </TouchableOpacity>

      </View>

      <View style={style.grupo}>

        <TouchableOpacity style={style.opcao} >
          <Text style={style.textoOpcao}> Gastos </Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.opcao} >
          <Text style={style.textoOpcao}> Gastos </Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.opcao} >
          <Text style={style.textoOpcao}> Gastos </Text>
        </TouchableOpacity>

      </View>

      <Card style={style.card2}>
        <MapView
          style={style.mapa}
          initialRegion={regiao}
        />
        <Text>Ponto de parada</Text>
      </Card>

    </ScrollView>

  )
};


const style = StyleSheet.create({

  header: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-around",
    marginTop: 20

  },

  simbolo: {
    alignItems: "baseline",
    justifyContent: "center",
    alignItems: "baseline",

  },

  titulo: {
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20

  },

  card: {
    marginTop: 20,
    borderRadius: 40,
    width: "90%",
    alignSelf: "center",
    padding: 20

  },

  card2: {
    marginTop: 20,
    borderRadius: 40,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    marginBottom: 40

  },

  imagem: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "center"

  },

  datas: {
    flexDirection: "row",
  },

  grupo: {
    flexDirection: "row",
    justifyContent: 'space-around',
    marginTop: 20,
    padding: 5
  },

  opcao: {
    backgroundColor: "#1E7987",
    height: 100,
    width: 100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"

  },

  textoOpcao: {
    color: "#fff"
  },

  iconi: {
    height: 40,
    width: 40
  },

  mapa: {
    width: 300,
    height: 300,
    alignSelf: "center",
    marginTop: 20
  },

  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  }

})



export default Func