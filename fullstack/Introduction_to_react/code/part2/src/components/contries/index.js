import React, {useState} from 'react'
import CountriesOne from './oneCountri'


const Countries = (props) => {
  let [showArr, setShowArr] = useState([])
  let showCotent = null

  const handleButtonState = (name) => {
    if (showArr.indexOf(name) !== -1) {
      showArr.splice(showArr.indexOf(name), 1)
    } else {
      showArr.push(name)
    }
    setShowArr([...showArr])
  }

  if (props.countriArr.length > 10) {
    showCotent = <div>Too many matches, specify anther filter</div>
  } else if (props.countriArr.length === 1) {
    showCotent = <CountriesOne countriObj={props.countriArr}></CountriesOne>
  } else if (props.countriArr.length > 1 && props.countriArr.length < 10) {
    showCotent = props.countriArr.map((item, index) => {
      return (
        <div key={index}>
          <span>{item.name}</span>

          <button value={item.name} onClick={() => handleButtonState(item.name)}>{showArr.includes(item.name) ? 'hidden' : 'show'}</button>
          <div>
            {
              showArr.includes(item.name) ? <CountriesOne countriObj={item}></CountriesOne> : <div></div>
            }
            
          </div>
        </div>
      ) 
    }) 
  } else {
    showCotent = <div>plase input sure countri name</div>
  }


  return (
    <div>
      {showCotent}
    </div>
  )
}



export default Countries