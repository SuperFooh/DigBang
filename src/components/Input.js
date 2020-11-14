import {useEffect} from 'react'
import Styles from './Input.module.css'
import Slider from 'rc-slider';
import useSlider from '../hooks/useSlider'
import 'rc-slider/assets/index.css';
import formatCurrency from '../utils/formatCurrency'


const Input = ({minValue, maxValue, text, base, currency, reportAmount}) => {

    let {amount, formattedAmount, amountChangedHanlder} = useSlider(minValue)
    useEffect(() => reportAmount(amount),[amount, reportAmount])
    //#region slider's metaData
    const markStyle = {
        whiteSpace: "nowrap",
        fontSize: "18px",
        fontWeight: "400",
        color: "#fffffd",
        padding: ".5em",
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
    //#endregion

    return (
        <div className={Styles.container}>
            <div className={Styles.details}>
                <label  htmlFor={text} className={Styles.title}>{text}</label>
                <input 
                    id={text}
                    type="text"
                    value={currency ? formattedAmount : amount}
                    className={Styles.amount}
                    onChange={amountChangedHanlder}
                    required
                />
            </div>
            < div className={Styles.sliderContainer}>
                <Slider
                    className={Styles.slider}
                    onChange={amountChangedHanlder}
                    defaultValue={amount}
                    value={amount}
                    step={base}
                    min={minValue}
                    max={maxValue}
                    marks={marks}
                    railStyle={{ borderRadius: "0"}}
                    trackStyle={{backgroundColor:"#fffffd"}}
                    dotStyle={{display: "none"}}
                    handleStyle={{border: "none", backgroundColor: "#fffffd"}}
                />
            </div>
        </div>
    )
}

export default Input
