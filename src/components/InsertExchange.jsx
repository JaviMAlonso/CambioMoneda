import React, { useState } from 'react'
import CurrencyComboBox from './CurrencyComboBox'
import '../App.css'

// Al crear la funcion gorda de exchangeList se le pasan los 2 parametros que le escibimos en el return de App.jsx 
export default function InsertExchange({ currencies, onNewExchange }) {

    //on newExchange con las 3 cosas de aqui abajo se le pasa a App.js
    const [originCurrency, setOriginCurrency] = useState('')
    const [destinyCurrency, setDestinyCurrency] = useState('')
    const [amount, setAmount] = useState("")
    //importante que este vacio porque sino se crea el exchange con datos por defecto

    //los handle son exactamente iguales a los anteriores
    const handleSelectOriginCurrency = (currency) => {
        setOriginCurrency(currency)
    }
    const handleSelectDestinyCurrency = (currency) => {
        setDestinyCurrency(currency)
    }
    const handleSelectAmount = (amount) => {
        setAmount(amount)
    }

    // este handle crea un objeto Exchange que va a ser introducido por el recto del array para despues pasar a ser renderizado
    // al crear el newExchange se le pasan las mismas variables que en el array de initialExchanges
    const handleNewExchange = () => {
        const newExchange = {
            id: Date.now(),
            codOrigen: originCurrency,
            codDest: destinyCurrency,
            amount: parseFloat(amount),
        }
        onNewExchange(newExchange)
    }

    //return con CSS para parecerse a lo de Figma
    return (
        <div>
            <div className='row cajaHeader'>
                <div className='padding'>
                    <label htmlFor="amount">Amount:</label>
                    <input type="text" id="amount" onChange={(e) => handleSelectAmount(e.target.value)} />
                </div>
                <div className='padding'>
                    <label htmlFor="originCurrency">Origin Currency:</label>
                    <CurrencyComboBox currencies={currencies} onSelectCurrency={handleSelectOriginCurrency} />

                </div>
                <img src="../img/unaunidaddeflecha.png" alt="" />
                <div className='padding'>
                    <label htmlFor="destinyCurrency">Destiny Currency:</label>
                    <CurrencyComboBox currencies={currencies} onSelectCurrency={handleSelectDestinyCurrency} />
                </div>
                <button className='boton' onClick={handleNewExchange}>Add</button>
            </div>
        </div>
    )
}
