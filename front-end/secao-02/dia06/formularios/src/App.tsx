import { useState } from 'react'
import './App.css'
import Step1 from './components/Step1'
import Step2 from './components/Step2'

function App() {

  const [ step, setStep ] = useState(0);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1)
  }
  
  return (
    <div>
      { step === 0 && <Step1 nextStep={ nextStep } />}
      { step === 1 && <Step2 nextStep={ nextStep } />}
    </div>
  )
}

export default App
