import React, {useState} from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}
const ShowResult = ({text, result}) => {
  if (text === 'positive') {
    result = (result * 100) + '%'
  }
  return (
    <p>{text} {result}</p>
  )
}

const Unicafe = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [compute, setCompute] = useState({
    all: 0,
    average: 0,
    positive: 0
  })

  

  const setState = (newState, changeStateFn, newGood, newBad) => {
    changeStateFn( (state) => {
      if (state.constructor === Object) {
        state = {...state, ...newState}
      }else if (state.constructor === Array) {
        state = newState.slice()
      } else {
        state = newState
      }
      let newCompute = computeData(newGood, newBad)
      setCompute({...compute, ...newCompute })
      return state
    })
  }

  const computeData = (newGood, newBad, newNeutral) => {
    let newAll = compute.all + 1
      return {
        all: newAll,
        average: (newGood / newAll) - (newBad / newAll),
        positive: newGood / newAll
      }
  }


  const handleGoodClick = () => {
    setState(good + 1, setGood, good + 1, bad)
  }
  const handleneutralClick = () => {
    setState(neutral + 1, setNeutral, good, bad)
  }
  const handleBadClick = () => {
    setState(bad + 1, setBad, good, bad + 1)
  }
  return (
    <div>
      <h4>give feedback</h4>
      <Button handleClick={handleGoodClick} text="good"></Button>
      <Button handleClick={handleneutralClick} text="neutral"></Button>
      <Button handleClick={handleBadClick} text="bad"></Button>
      <h4>statistics</h4>
      <ShowResult text="good" result={good}></ShowResult>
      <ShowResult text="neutral" result={neutral}></ShowResult>
      <ShowResult text="bad" result={bad}></ShowResult>
      <ShowResult text="all" result={compute.all}></ShowResult>
      <ShowResult text="average" result={compute.average}></ShowResult>
      <ShowResult text="positive" result={compute.positive}></ShowResult>
    </div>
  )
}

export default Unicafe;