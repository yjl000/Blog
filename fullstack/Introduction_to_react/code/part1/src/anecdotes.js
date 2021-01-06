import React, {useState} from 'react'
function getRandomIntSection(m, n) {
  return (Math.floor(Math.random() * (n - m + 1)) + m)
}
const Anecdotes = (props) => {
  const [selected, setSelected] = useState(0)
  const [num, setNum] = useState(0)
  const [maxIndex, setMaxIndex] = useState(0)
  const [points, setPoints] = useState(new Array(7).fill(0)) // new Array(6+1).join('0').split('').map(parseFloat)
  
  const handleSelected = () => {
    let newNum = getRandomIntSection(0, 5)
    setNum(newNum)
    setSelected(newNum)
  }

  const handleVote = () => {
    const newPoints = [...points]
    newPoints[num]++
    setPoints(newPoints)
    for (let i = 0; i < newPoints.length; i++) {
      if (Math.max(...newPoints) === newPoints[i]) {
        setMaxIndex(i)
        break
      }
      
    }

  }
  return (
    <div>
      <h3>Anecdotes of the day</h3>
      <p>
        {props.anecdotes[selected]}
      </p>
      <p>has {points[num]} votes</p>
      <div>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleSelected}>next anecdote</button>
      </div>
      <br />
      <br />
      <h3>Anecdotes with most votes</h3>
      <div>
        <p>has {Math.max(...points)} votes</p>
        <p>{props.anecdotes[maxIndex]}</p>
      </div>
      
      
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  return (
    <div>
      <Anecdotes anecdotes={anecdotes}></Anecdotes>
    </div>
  )
}

export default App