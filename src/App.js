import React, { useState } from 'react'
import InsertExchange from './components/InsertExchange'
import ExchangeList from './components/ExchangeList'
import './App.css'

const currencies = {
  "USD": {
    "emoji": "\uD83C\uDDFA\uD83C\uDDF8",
    "exchangeRate": 1,
    "name": "US Dollar",
    "flag": "us.png"
  },
  "EUR": {
    "emoji": "\uD83C\uDDEA\uD83C\uDDFA",
    "exchangeRate": 0.89,
    "name": "Euro",
    "flag": "eu.png"
  },
  "JPY": {
    "emoji": "\uD83C\uDDEF\uD83C\uDDF5",
    "exchangeRate": 114.42,
    "name": "Japanese Yen",
    "flag": "jp.png"
  },
  "GBP": {
    "emoji": "\uD83C\uDDEC\uD83C\uDDE7",
    "exchangeRate": 0.75,
    "name": "British Pound",
    "flag": "gb.png"
  },
  "AUD": {
    "emoji": "\uD83C\uDDE6\uD83C\uDDFA",
    "exchangeRate": 1.35,
    "name": "Australian Dollar",
    "flag": "au.png"
  },
  "CAD": {
    "emoji": "\uD83C\uDDE8\uD83C\uDDE6",
    "exchangeRate": 1.28,
    "name": "Canadian Dollar",
    "flag": "ca.png"
  },
  "CHF": {
    "emoji": "\uD83C\uDDE8\uD83C\uDDED",
    "exchangeRate": 0.93,
    "name": "Swiss Franc",
    "flag": "ch.png"
  },
  "CNY": {
    "emoji": "\uD83C\uDDE8\uD83C\uDDF3",
    "exchangeRate": 6.36,
    "name": "Chinese Yuan",
    "flag": "cn.png"
  },
  "SEK": {
    "emoji": "\uD83C\uDDF8\uD83C\uDDEA",
    "exchangeRate": 8.51,
    "name": "Swedish Krona",
    "flag": "se.png"
  },
  "NZD": {
    "emoji": "\uD83C\uDDF3\uD83C\uDDFF",
    "exchangeRate": 1.49,
    "name": "New Zealand Dollar",
    "flag": "nz.png"
  },
  "INR": {
    "emoji": "\uD83C\uDDEE\uD83C\uDDF3",
    "exchangeRate": 74.57,
    "name": "Indian Rupee",
    "flag": "in.png"
  },
  "BRL": {
    "emoji": "\uD83C\uDDE7\uD83C\uDDF7",
    "exchangeRate": 5.22,
    "name": "Brazilian Real",
    "flag": "br.png"
  },
  "RUB": {
    "emoji": "\uD83C\uDDF7\uD83C\uDDFA",
    "exchangeRate": 73.96,
    "name": "Russian Ruble",
    "flag": "ru.png"
  },
  "ZAR": {
    "emoji": "\uD83C\uDDFF\uD83C\uDDE6",
    "exchangeRate": 16.96,
    "name": "South African Rand",
    "flag": "za.png"
  },
  "MXN": {
    "emoji": "\uD83C\uDDF2\uD83C\uDDFD",
    "exchangeRate": 20.45,
    "name": "Mexican Peso",
    "flag": "mx.png"
  }
  // Puedes agregar más códigos de moneda, emojis de banderas, nombres de moneda y nombres de archivos de banderas según tus necesidades
}
const initialExchanges = [
  {
    id: 1001,
    codOrigen: "EUR",
    codDest: "USD",
    amount: 2
  },
  {
    id: 1002,
    codOrigen: "USD",
    codDest: "JPY",
    amount: 3
  }
]

const App = () => {
  //Esta línea de código crea un estado llamado exchanges con un valor inicial definido por 
  //initialExchanges, y una función llamada setExchanges que se utiliza para actualizar ese estado.
  // 1º nombre = variable nueva, 2º nombre = funcion relacionada a la varible anterior
  const [exchanges, setExchanges] = useState(initialExchanges)

  //Los  handle se llaman asi por si otro tiene que tocar el codigo que lo entienda a la primera
  //pero es similar a una funcion de flecha como las de JS.
  const handleExchanges = (newExchange) => {

    // el setExchanges viene del const de arriba y se le dice que cree una variable(currentExchanges)
    // y que cada vez que se le llame llene esa variable consigo misma + un nuevo exchange, que es el que
    // le pasa el handle (es como hacer +=)
    setExchanges(currentExchanges => [...currentExchanges, newExchange])
  }

  //el return es puro CSS para que se parezca a lo de Figma y llamar a los componentes "importantes"
  // que son el insert y el list/card

  //Los nombres en azul dentro de cada componente son "variables" que va a necesitar ese componente
  // en sus funciones
  return (
    <div className='container'>
      <div className='row'>
        <img src="../img/ep_money.png" alt="" />
        <div className='w-100'>
          <h1>Currency Exchanger</h1>
          <div><InsertExchange onNewExchange={handleExchanges} currencies={currencies} /></div>
        </div>
      </div>
      <ExchangeList exchanges={exchanges} currencies={currencies} setExchanges={setExchanges} />
    </div>
  )
}
export default App;
