import Styles from './App.module.css'
import Input from './Input'
import Summary from './Summary'

function App() {

  //#region metadata
  const amount = {
    text: "monto total",
    minValue: 5000,
    maxValue: 50000,
    base: 500,
    currency : true,
  }
  const term = {
    text: "plazo",
    minValue: 3,
    maxValue: 24,
    base: 1,
  }
  //#endregion
  
  return (
    <main className={Styles.app}>
      <div className={Styles.container}>
        <h1 className={Styles.title}>Simulá tu crédito</h1>
        <Input {...amount}/>
        <Input {...term}/>
        <Summary />
      </div>
    </main>
  );
}

export default App;
