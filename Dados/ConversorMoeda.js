import React from 'react';
import axios from "axios";


const api = axios.create({
    baseURL: "https://economia.awesomeapi.com.br/json/all",
});

console.log(api)

export default api

