import { useState } from 'react'

const Button = ({eventHandler, type}) => {
  return (
    <button onClick={() => eventHandler({type})}>{type}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const handleButton = ({type}) => {
      if(type == 'good'){
        const newGood = good + 1
        setGood(newGood)
      }

      if(type == 'neutral'){
        const newNeutral = neutral + 1
        setNeutral(newNeutral)
      }
      if(type == 'bad'){
        const newBad = bad + 1
        setBad(newBad)
      }
  }
  
  return (
    <div>
      <h1>
        give feedback
      </h1>
     <Button eventHandler={handleButton} type='good'/>
     <Button eventHandler={handleButton} type='neutral'/>
     <Button eventHandler={handleButton} type='bad'/>
      <h2>
        statistics
      </h2>
      <span>good {good}</span><br/>
      <span>neutral {neutral}</span><br/>
      <span>bad {bad}</span>


    </div>
  )
}

export default App