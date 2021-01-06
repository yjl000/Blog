import React from 'react'

const CountriesOne = (props) => {
  const flag = props.countriObj instanceof Array
  const countriObj = flag ? props.countriObj[0] : props.countriObj
  return (
    <div>
      <h2>{countriObj.name}</h2>
      <p>capital {countriObj.capital}</p>
      <p>population {countriObj.population}</p>
      <div>
        <h3>languages</h3>
        <ul>
          {countriObj.languages.map(item => <li key={item.iso639_1}>{item.name}</li>)}
        </ul>
        <img width="200" height="200" src={countriObj.flag} alt="flag" />
      </div>
    </div>
  )
}

export default CountriesOne