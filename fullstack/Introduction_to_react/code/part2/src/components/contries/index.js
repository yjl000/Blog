import React, {useState} from 'react'
import CountriesOne from './oneCountri'


const Countries = (props) => {
  let [showArr, setShowArr] = useState([])
  let showCotent = null

  const handleButtonState = (event) => {
    let countryName = event.target.value
    if (showArr.indexOf(countryName) !== -1) {
      showArr.splice(showArr.indexOf(countryName), 1)
    } else {
      showArr.push(event.target.value)
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

          <button value={item.name} onClick={handleButtonState}>{showArr.includes(item.name) ? 'hidden' : 'show'}</button>
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