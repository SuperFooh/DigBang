import Styles from './Summary.module.css'
import formatCurrency from '../utils/formatCurrency'
const Summary = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.totalContainer}>
                <span className={Styles.totalDescription}>cuota fija por mes</span>
                <span className={Styles.totalAmount}>{formatCurrency(20000, "en-US")}</span>
            </div>
            <div className={Styles.callsToAction}>
                <button type="button" className={Styles.getCredit}>obtené crédito</button>
                <button type="button" className={Styles.cuotas}>ver detalle de cuotas</button>
            </div>
        </div>
    )
}

export default Summary
