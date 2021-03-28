import React, { useState, useRef, useEffect, Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, FlatList, DatePickerAndroid } from 'react-native';
import { Button, Input } from 'react-native-elements'
import { Appbar, Avatar, Card, Title, Paragraph, List } from 'react-native-paper'

import { v4 as uuidv4 } from 'uuid'
import axios from 'axios';

var uuid = require('react-native-uuid');



const Gastos = ({ route, navigation }) => {

    const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
    const [item, setItem] = useState(" ")
    const [valor, setValor] = useState(0)
    const [Data, setData] = useState([])
    const [valorTotal, setValorTotal] = useState(0)
    const [nada, setNada] = useState(0)
    const [ide, setIde] = useState()
    const [value, setValue] = useState([])
    const [expanded, setExpanded] = useState(true);
    const [api, setApi] = useState([])
    const [moeda, setMoeda] = useState(1)
    const [id, setId] = useState()
    const [valorf, setValorf] = useState()
    const [itemf, setItemf] = useState()





    let res = axios.get('https://economia.awesomeapi.com.br/json/all/USD-BRL,EUR-BRL').then(response => {
        api.push({
            dolar: response.data.USD.bid,
            euro: response.data.EUR.bid
        })
    }).catch(() => {
        console.log('Error retrieving data')
    })


    const handlePress = () => setExpanded(!expanded);


    const onChangeItem = (e) => {
        setItem(e)
    }

    const onChangeValor = (e) => {
        setValor(parseFloat(e))
        setId(Math.random())
    }



    const Handbotton = () => {

        if (item.length > 0 && valor > 0) {
            Data.push({
                item: item,
                valor: valor,
                id: Data.length,
                i: 0
            })

            let total = Data.reduce((total, preco) => total + preco.valor, 0)
            setValorTotal(total.toFixed(2))
        }
        else (
            window.alert("Preencha todos os campos")
        )

    }

    const renderItem = ({ item }) => {

        const ide = Data.findIndex(a => {
            return a === item
        })

        setValorf(item.valor)
        setItemf(item.item)
        const valorFixo = item.valor

        return (
            <View style={style.resultados}>
                <Text key={item.id} style={{ fontSize: 18 }}>
                    {itemf}
                </Text>
                <View style={{ fontSize: 18, flexDirection: "row", }}>

                    <Text key={(uuid())} style={{ alignSelf: "center", padding: 10, }} >
                        {valorf}
                    </Text>

                    <Button title="adicionar"
                        onPress={() => {

                            setValorTotal(Data.reduce((total, preco) => total + (preco.valor + preco.valor), 0))
                            Data.splice(ide, 1)
                            Data[ide] = {
                                item: itemf,
                                valor: valorf + valorFixo,
                            }

                        }} />

                    <Button title="deletar"
                        buttonStyle={{ alignSelf: "center", marginRight: 10 }}
                        onPress={() => {
                            Data.splice(ide, 1)
                            let total = Data.reduce((total, preco) => total + preco.valor, 0)
                            setValorTotal(total.toFixed(2))
                        }} />
                </View>

            </View>

        )

    }

    return (

        <ScrollView style={style.container} >


            <View style={style.header} >
                <Image source={require("../icons/simbolo.png")} />
                <Text style={{ fontSize: 28, color: "#1E7987", textAlign: "center" }}>Viagem</Text>
                <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
            </View>


            <View style={style.entradas}>
                <Input placeholder="Item" onChangeText={onChangeItem} />
                <Input placeholder="valor" onChangeText={onChangeValor} keyboardType="numeric" />
                <Button buttonStyle={style.botao} title="marcar" onPress={Handbotton} />
                <List.Section style={style.conversor} >
                    <List.Accordion style={style.textOptions}
                        title="Converter moeda"
                        left={props => <List.Icon {...props} />}>
                        <TouchableOpacity onPress={() => {
                            setMoeda(api[0].dolar)
                            let total = Data.reduce((total, preco) => total + preco.valor, 0)
                            window.alert(total.toFixed(2) * moeda)
                        }}>
                            <List.Item color="#fff" title="Dolar" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <List.Item title="Euro" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <List.Item title="Libra" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <List.Item title="Peso" />
                        </TouchableOpacity>
                    </List.Accordion>
                </List.Section>

            </View>


            <Card style={style.card}>
                <Card.Content>
                    <Title style={style.title} >Valor (Real)</Title>
                    <Paragraph> R$ {valorTotal} </Paragraph>
                    <View style={style.lista} >
                        <FlatList
                            data={Data}
                            renderItem={renderItem}
                            keyExtractor={item => item.item}
                        />
                    </View>
                </Card.Content>
            </Card>


        </ScrollView >

    )
};


const style = StyleSheet.create({

    container: {
        flex: 1
    },

    header: {
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-around",
        marginTop: 20

    },

    title: {
        backgroundColor: "#E1F6BE",
        justifyContent: "center",
        color: "#55BC4C"
    },

    card: {

        backgroundColor: "#E1F6BE",
        marginTop: 20,
        justifyContent: "center",
        padding: 5

    },

    entradas: {
        marginTop: 20
    },

    textOptions: {
        color: "#fff"
    },

    conversor: {

        backgroundColor: "#1E7987",
        width: "80%",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 40,

    },

    lista: {
        backgroundColor: "#fff"
    },

    resultados: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 6
    },

    botao: {
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "#EB6458",
        width: "80%",
        height: 50,
        borderRadius: 40,
        padding: 5

    }



})



export default Gastos