import { useState } from 'react'

const Button = ({eventHandler, type}) => {
  return (
    <button onClick={() => eventHandler({type})}>{type}</button>
  )
}

const StatisticLine = ({text, value, unit}) => {

  return (
    <tr>
      <td>{text}</td>
      <td>{value} {unit}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, all, avg, positive}) => {
  if(good === 0 && bad === 0 && neutral == 0 ) {
    return (
      <p>
        No Feedback Given
      </p>
    )
  } else {
  return(
    <div>
      <h2>
        statistics
      </h2>
      <table>
        <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={all}/>
        <StatisticLine text="average" value={avg}/>
        <StatisticLine text="positive" value={positive} unit='%'/>
        </tbody>
      </table>
    </div>
    )
  } 
}

const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)
  const [positive, setPositive] = useState(0)


  const handleButton = ({type}) => {
      let newGood = good
      if(type == 'good'){
        newGood = good + 1
        setGood(newGood)
        
      }
      let newNeutral = neutral
      if(type == 'neutral'){
        newNeutral = neutral + 1
        setNeutral(newNeutral)
        
      }
      let newBad = bad
      if(type == 'bad'){
        newBad = bad + 1
        setBad(newBad)
        
      }
      const newAll = all + 1
      // console.log(newAll)
      setAll(newAll)

      const newAvg = (newGood*1 + newBad*(-1))/newAll
      setAvg(newAvg)

      const newPositive = (newGood/newAll)*100
      setPositive(newPositive)
  }
  
  return (

    <div>
      <h1>
        give feedback
      </h1>
      <Button eventHandler={handleButton} type='good'/>
      <Button eventHandler={handleButton} type='neutral'/>
      <Button eventHandler={handleButton} type='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} avg={avg} positive={positive}/>

    </div>
  )

}

export default App