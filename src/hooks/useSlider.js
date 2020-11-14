import {useState, useEffect} from 'react'
import formatCurrency from '../utils/formatCurrency'

 const useSlider = (initialValue) => {
    
    const [amount, setAmount ] = useState("");
    const [formattedAmount, setFormattedAmount] = useState("");
    useEffect(() => {setAmount(initialValue);setFormattedAmount(formatCurrency(initialValue)) }, [initialValue])
    
    const updateAmounts = value => {
        let amount = parseInt(value);
        setAmount(amount);
        setFormattedAmount(formatCurrency(amount));
    }

    const amountChangedHanlder = param => {

        let nodeValue = param.currentTarget?.value
        let value = 
            parseInt(param)
                || parseInt(nodeValue) 
                || parseInt(nodeValue.split("$")[1]?.trim().replace('.', "").replace(",",""))
        updateAmounts(value || 0);
    }

    return ({
        amount,
        formattedAmount,
        amountChangedHanlder,
    })
}
export default useSlider;
