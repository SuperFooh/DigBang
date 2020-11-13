import {useState, useEffect} from 'react'
import Styles from './Input.module.css'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Input = ({minValue, maxValue, text, base, currency}) => {
    const [amount, setAmount ] = useState(0);
    useEffect(() => setAmount(Math.ceil((maxValue - minValue) /2)), [])
    const changeAmount = e => {
        const inputAmount = e.currentTarget.value;
        /[0-9]/.test(inputAmount) || setAmount(0);
        
        const purgedInput = currency ? parseInt(inputAmount.split("$")[1]) : parseInt(inputAmount);
        !!purgedInput && setAmount(purgedInput);
    }
    const sliderChange = value => setAmount(value)
    const markStyle = {
        whiteSpace: "nowrap",
        fontSize: "18px",
        fontWeight: "100",
    }
    const marks ={
        [minValue] : {
            style: markStyle,
            label: <span>{`${currency ? "$"+minValue : minValue}`}</span>
        },
        [maxValue] : {
            style: markStyle,
            label: <span>{`${currency ? "$"+maxValue : maxValue}`}</span>
        }
    }
    return (
        <div className={Styles.container}>
            <div className={Styles.details}>
                <label  htmlFor={text} className={Styles.title}>{text}</label>
                <input 
                    id={text}
                    type="text" 
                    value={currency ? `$ ${amount}` : amount}
                    className={Styles.amount}
                    onChange={changeAmount}
                    required
                />
            </div>
            < div className={Styles.sliderContainer}>
                <Slider 
                    onChange={sliderChange} 
                    defaultValue={Math.ceil((maxValue - minValue) /2)} 
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
