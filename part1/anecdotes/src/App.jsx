import { useState } from 'react'

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {text:'If it hurts, do it more often.', vote: 0},
    {text:'Adding manpower to a late software project makes it later!', vote: 0},
    {text:'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', vote: 0},
    {text:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', vote: 0},
    {text:'Premature optimization is the root of all evil.', vote: 0},
    {text:'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', vote: 0},
    {text:'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', vote: 0},
    {text:'The only way to go fast, is to go well.', vote: 0}
])

  const [selected, setSelected] = useState(0)
  const [highest, setHighest] = useState(0)

  const handleNextAnecdoteButton = () => {
    let newSelected; // used let because intends to be updated

    do {
      newSelected = Math.floor(Math.random() * (anecdotes.length - 0) + 0)
      // console.log(selected, newSelected)
    } while (selected === newSelected)
    
    setSelected(newSelected)
  } 

  const findMostVote = (updatedAnecdotes) => {

    // console.log(updatedAnecdotes, 'paremeter def or undef')
    
    let highest_index = 0 

    for(let i=1; i<updatedAnecdotes.length; i++){
      // console.log('loop entered')
      // console.log(updatedAnecdotes[highest_index].vote)
      // console.log(updatedAnecdotes[i].vote)
      // console.log(updatedAnecdotes[highest_index].vote < updatedAnecdotes[i].vote)
      if(updatedAnecdotes[highest_index].vote < updatedAnecdotes[i].vote){
        console.log(highest_index, 'highest inside loop', i, 'i')
        highest_index = i
      } 
      // else if (updatedAnecdotes[highest_index[0]].vote === updatedAnecdotes[i].vote){
      //   highest_index.push[i]
      //   console.log(highest_index)
      // }
    } 
    console.log(updatedAnecdotes[highest_index].text, updatedAnecdotes[highest_index].vote, 'final')
    setHighest(highest_index)
    // console.log(highest_index[0], 'highest')
  }

  const updateVote = (newSelected) => {
    const updatedAnecdotes = [...anecdotes]
    console.log(updatedAnecdotes, 'updatedAnecdotes')
    updatedAnecdotes[newSelected].vote += 1
    setAnecdotes(updatedAnecdotes)
    console.log('setting anecdotes')
    findMostVote(updatedAnecdotes)
  }

  return (
  <>
    <h1>
      Anecdote of the day
    </h1>
    <div>
      {anecdotes[selected].text}
    </div>
    <button onClick={() => updateVote(selected)}>vote</button>
    <button onClick={handleNextAnecdoteButton}>next anecdote</button>
    <h2>
      Anecdote with most votes
    </h2>
    <div>
      {anecdotes[highest].text} has {anecdotes[highest].vote} votes
    </div>  
  </>
  )
}

export default App
