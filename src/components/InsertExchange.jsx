import React, { useState, useEffect } from 'react'
import CurrencyComboBox from './CurrencyComboBox'
import '../App.css'

export default function InsertExchange({ currencies, onNewExchange }) {
    //Use state => exchangeInput = amount, OriginCurrency, DestinyCurrency
    //on newExchange con las 3 cosas de aqui abajo se le pasa a App.js

    const [newExchange, setNewExchange] = useState("")
    const [selectedOriginCurrency, setSelectedOriginCurrency] = useState(null)
    const [selectedDestinyCurrency, setSelectedDestinyCurrency] = useState(null)
    const [amount, setAmount] = useState("")
    const [result, setResult] = useState("")

    const handleSelectOriginCurrency = (currency) => {
        setSelectedOriginCurrency(currency)
    }
    const handleSelectDestinyCurrency = (currency) => {
        setSelectedDestinyCurrency(currency)
    }
    const handleSelectAmount = (amount) => {
        setAmount(amount)
    }

    useEffect(() => {
        if (amount && selectedOriginCurrency && selectedDestinyCurrency) {
            setResult(amount * selectedOriginCurrency * selectedDestinyCurrency);
        }
    }, [amount, selectedOriginCurrency, selectedDestinyCurrency]);

    const handleKeyUp = (e) => {
        if (e.key === 'Enter' && newExchange !== '') {
            const newExchangeObject = {
                id: Date.now(),
                codOrigen: selectedOriginCurrency,
                codDest: selectedDestinyCurrency,
                amount: amount,
                result: result,
            }
            //intertar un exchange en el array del padre
            onNewExchange(newExchangeObject)
            setNewExchange('')//vacia el input al darle al enter
        }
    }
    return (
        <div><label htmlFor="">Insert Exchange:</label>
            <div>
                <h2>Selected Origin Currency: {selectedOriginCurrency}</h2>
                <h2>Selected Destiny Currency: {selectedDestinyCurrency}</h2>
                <h3>Selected Amount: {amount}</h3>
                <h3>Selected Result: {result}</h3>
            </div>
            <CurrencyComboBox currencies={currencies} onSelectCurrency={handleSelectOriginCurrency}></CurrencyComboBox>
            <CurrencyComboBox currencies={currencies} onSelectCurrency={handleSelectDestinyCurrency}></CurrencyComboBox>
            <input type="text" name="result" id="result" />
            <input type="text" name="selectedAmount" id="selectedAmount" onNewExchange={handleSelectAmount} onChange={(e) => setAmount(e.target.value)} value={amount} onKeyUp={handleKeyUp} />
        </div>
    )
}
