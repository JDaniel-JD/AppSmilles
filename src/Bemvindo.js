import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements'
import { Appbar, Avatar, Card, Title, Paragraph } from 'react-native-paper'
import Carousel from 'react-native-snap-carousel';


const dados = require('../icons/praia.png')

const Bemvindo = ({ route, navigation }) => {

  const [pic, setImagem] = useState(route.params)
  const [dados, setDados] = useState([])
  dados.push(pic)
  const carosselRef = useRef()
  console.log(dados)

  const renderItem = ({ item, index }) => {

    return (
      <View>
        <Card style={style.card}>
          <TouchableOpacity style={style.imagem} onPress={() => navigation.navigate("Func", { ida: item.ida, volta: item.volta, imagem: item.imagem })}>
            <Image style={{ height: 200, width: 250 }} source={item.imagem} />
          </TouchableOpacity>
          <Card.Content>
            <Title>Card title</Title>
            <View style={style.datas}>
              <Paragraph>{item.ida}</Paragraph>
              <Paragraph> até </Paragraph>
              <Paragraph> {item.volta} </Paragraph>
            </View>
          </Card.Content>
        </Card>
      </View>
    );
  }

  return (

    <View style={style.container1}>

      <View style={style.simbolo}>
        <Image source={require('../icons/simbolo.png')} />
      </View>


      <View style={style.titulo}>
        <Text style={{ fontSize: 28, color: "#1E7987" }}>Bem-Vindo (a) !!</Text>
      </View>


      <View style={{ justifyContent: "center", alignItems: "center" }} >
        <Carousel

          ref={carosselRef}
          data={dados}
          renderItem={renderItem}
          sliderWidth={500}
          itemWidth={300}
          inactiveSlideOpacity={0.5}

        />
      </View>


      <View style={style.botao}>

        <Button
          buttonStyle={style.novaViagem}
          title="Nova Viagem"
          titleStyle={{ fontSize: 23 }}
          onPress={() => navigation.navigate('Dados')}
        />

      </View>

    </View>

  )
};


const style = StyleSheet.create({

  container1: {
    flex: 1
  },

  carousel: {
    flex: 2
  },

  simbolo: {
    height: "10%",
    alignItems: "baseline",
    justifyContent: "center",
    paddingLeft: 25

  },

  titulo: {
    height: "15%",
    alignItems: "center",
    justifyContent: "center",

  },

  figura: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"

  },

  botao: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },

  novaViagem: {
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#EB6458",
    width: "90%",
    height: "50%",
    borderRadius: 40,
  },

  title: {
    color: "blue",
    fontSize: 20
  },

  card: {
    marginTop: 20,
    width: "95%",
    alignSelf: "center",
    paddingTop: 20

  },

  datas: {
    flexDirection: "row",
    marginBottom: 2

  },

  imagem: {
    alignSelf: "center",

  },


})



export default Bemvindo