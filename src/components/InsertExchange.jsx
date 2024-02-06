import React, { useState } from 'react'
import CurrencyComboBox from './CurrencyComboBox'
import '../App.css'

export default function InsertExchange({ currencies, onNewExchange }) {
    //Use state => exchangeInput = amount, OriginCurrency, DestinyCurrency
    //on newExchange con las 3 cosas de aqui abajo se le pasa a App.js

    const [originCurrency, setOriginCurrency] = useState('EUR')
    const [destinyCurrency, setDestinyCurrency] = useState('USD')
    const [amount, setAmount] = useState("")

    const handleSelectOriginCurrency = (currency) => {
        setOriginCurrency(currency)
    }
    const handleSelectDestinyCurrency = (currency) => {
        setDestinyCurrency(currency)
    }
    const handleSelectAmount = (amount) => {
        setAmount(amount)
    }

    const handleNewExchange = () => {
        if (originCurrency && destinyCurrency && amount) {
            const newExchange = {
                id: Date.now(),
                originCurrency: originCurrency,
                destCurrency: destinyCurrency,
                amount: parseFloat(amount),
            }
            onNewExchange(newExchange)
            setOriginCurrency('EUR')
            setDestinyCurrency('USD')
            setAmount('')
        }
    }
    return (
        <div>
            <div className='row patata'>
                <div className='padding'>
                    <label htmlFor="amount">Amount:</label>
                    <input type="text" id="amount" onChange={handleSelectAmount} />
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
