import {useState, useEffect} from 'react'
import Styles from './Input.module.css'
import formatCurrency from '../utils/formatCurrency'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';



const Input = ({minValue, maxValue, text, base, currency}) => {
    const [amount, setAmount ] = useState(0);
    
    useEffect(() => setAmount(
        currency 
            ? formatCurrency(parseInt(Math.ceil(maxValue /2))) 
            : parseInt(Math.ceil(maxValue  /2))
    ), [currency, maxValue])

    const changeAmount = e => {
        const inputAmount = e.currentTarget.value;
        /[0-9]/.test(inputAmount) 
            ? setAmount(inputAmount)
            : setAmount(currency ? formatCurrency(0) : 0);   
    }
    const sliderChange = value => {setAmount(currency ? formatCurrency(value) : value)}

    const markStyle = {
        whiteSpace: "nowrap",
        fontSize: "18px",
        fontWeight: "400",
        color: "#fffffd",
        padding: ".5em"
    }

    const marks ={
        [minValue] : {
            style: markStyle,
            label: <span>{`${currency ? formatCurrency(minValue): minValue}`}</span>
        },
        [maxValue] : {
            style: markStyle,
            label: <span>{`${currency ? formatCurrency(maxValue): maxValue}`}</span>
        }
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.details}>
                <label  htmlFor={text} className={Styles.title}>{text}</label>
                <input 
                    id={text}
                    type="text" 
                    value={amount}
                    className={Styles.amount}
                    onChange={changeAmount}
                    required
                />
            </div>
            < div className={Styles.sliderContainer}>
                <Slider
                    onChange={sliderChange} 
                    defaultValue={amount}
                    step={base}
                    min={minValue} 
                    max={maxValue}
                    marks={marks}
                />
            </div>
        </div>
    )
}

export default Input
