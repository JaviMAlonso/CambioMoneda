import React, { useState } from 'react'

const InsertExchange = ({ onAddExchange }) => {
    const [originCurrency, setOriginCurrency] = useState('');
    const [destinyCurrency, setDestinyCurrency] = useState('');
    const [amount, setAmount] = useState('');

    const handleAddExchange = () => {
        // Para validar que los campos no estén vacíos y que sean válidos
        if (originCurrency && destinyCurrency && amount && !isNaN(parseFloat(amount))) {
            const newExchange = {
                originCurrency,
                destinyCurrency,
                amount: parseFloat(amount),
            };
            // Llamar a la función para agregar el nuevo cambio
            onAddExchange(newExchange);

            // Limpiar los campos después de agregar
            setOriginCurrency('');
            setDestinyCurrency('');
            setAmount('');
        }
    };

    return (
        <div>
            <label>
                Amount:
                <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </label>
            <br />
            <label>
                Origin Currency:
                <input type="text" value={originCurrency} onChange={(e) => setOriginCurrency(e.target.value)} />
            </label>
            <br />
            <label>
                Destiny Currency:
                <input type="text" value={destinyCurrency} onChange={(e) => setDestinyCurrency(e.target.value)} />
            </label>
            <br />
            <button onClick={handleAddExchange}>Exchange</button>
        </div>
    );
};

export default InsertExchange;
