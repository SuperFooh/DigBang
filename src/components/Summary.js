import Styles from './Summary.module.css'
import formatCurrency from '../utils/formatCurrency'
import { useEffect, useState } from 'react'

const Summary = ({selectedAmount, selectedTerm}) => {

    let [totalAmount, setTotalAmount] = useState(formatCurrency(0,"en-US"))
    useEffect(() => setTotalAmount(formatCurrency(selectedAmount/selectedTerm,"en-US")), [selectedAmount, selectedTerm])
    return (<div className={Styles.container}>
        <div className={Styles.totalContainer}>
            <span className={Styles.totalDescription}>cuota fija por mes</span>
            <span className={Styles.totalAmount}>{totalAmount}</span>
        </div>
        <div className={Styles.callsToAction}>
            <button type="button" className={Styles.getCredit}>obtené crédito</button>
            <button type="button" className={Styles.cuotas}>ver detalle de cuotas</button>
        </div>
    </div>)
}

export default Summary
