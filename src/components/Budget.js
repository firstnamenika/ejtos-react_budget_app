import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);


    const handleCurrencyChange = (event) => {
        const selectedCurrency = event.target.value;
        dispatch({ type: 'CHG_CURRENCY', payload: selectedCurrency });
    }

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    
    }
    return (
        <div>
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>

<div className='currency-span'>
    <select value={currency} onChange={handleCurrencyChange}>
    <option value='$' name='dollar'>$ US Dollar</option>
    <option value='€' name='euro'>€ Euro</option>
    <option value='£' name='pound'>£ Pound</option>
    <option value='₹' name='rupee'>₹ Rupee</option>
    </select>
</div>
</div>
    );
};
export default Budget;
