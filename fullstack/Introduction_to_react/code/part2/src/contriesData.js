import React, {useState, useEffect} from 'react'
import Countries from './components/contries/index'
import axios from 'axios'

const CountriesData = () => {
  let [countries, setCountries] = useState('')
  let [countriArr, setCountriArr] = useState([])
  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${countries}`)
      .then(res => {
        const arr = res.data
        setCountriArr(arr)
      }).catch(err => {
        setCountriArr([])
      })
  }, [countries])

  const handleInputChange = (event) => {
    setCountries(event.target.value)
  }
  return (
    
    <div>
      <div>
        find countries <input value={countries} onChange={handleInputChange} />
      </div>
      <div>
        <Countries countriArr={countriArr}> </Countries>
      </div>
    </div>
  )
}

export default CountriesData