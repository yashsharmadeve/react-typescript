import './App.css'
import Button from './components/Button'
import Input from './components/Input';

function App() {

  function incValue(value:number,setValue:(value:number)=>void){
    setValue(value+1);
  }

  return (
    <>
      <Button text={1} />
      <Button onInc={incValue} text="Click Me Again" />

      <br />

      <Input />
    </>
  )
}

export default App
