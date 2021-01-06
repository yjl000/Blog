import React, {useState, useEffect} from 'react';
import Filter from './components/person/filter'
import PersonForm from './components/person/personForm'
import Person from './components/person/persons'
import personServer from './server/person'
import Notify from './components/notifi/index'

const PhoneBook = () => {
  const [persons, setPerson] = useState([]);

  const [newPerson, setNewPerson] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');
  const [filterPerson, setFilterPerson] = useState(persons);
  const [successMessage, setSuccessMessage] = useState('')
  const [state, setState] = useState('success')

  useEffect(() => {
    resetData()
  }, [])

  const resetData = () => {
    personServer.getAll().then(initData => {
      setPerson(initData)
      setFilterPerson(initData);
    })
  }

  const addName = (event) => {
    event.preventDefault();
    const flag = persons.some((person) => person.name === newPerson);
    const person = persons.find(n => n.name === newPerson)
    
    const newPersonObj = {
      name: newPerson,
      number: newNumber,
    }

    if (flag) {
      if (window.confirm(`${newPerson} is already added to phonebook, replace the old number with a new one?`)) {
        personServer.update(person.id, newPersonObj).then(res => {
          resetData()
        }).catch(err => {
          setState('error')
          setSuccessMessage(`Information of ${person.name} has already been removed from server`)
          setTimeout(() => {
            setSuccessMessage('')
          }, 5000);
        })
      }

      setNewPerson('');
      setNewNumber('');
      return;
    }

    personServer.create(newPersonObj).then(newPerson => {
      setPerson(persons.concat(newPerson));
      setFilterPerson(persons.concat(newPerson));
      setNewPerson('');
      setNewNumber('');
      setSearchName('');
      setState('success')
      setSuccessMessage(`Added ${newPerson.name}`)
      setTimeout(() => {
        setSuccessMessage('')
      }, 5000);
    })

    
  }
  const handleValueChange = (event) => {
    setNewPerson(event.target.value);
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  let filterPersonArr = [];
  const handleSearchChange = (event) => {
    filterPersonArr = persons.filter(person => {
      return person.name.toLocaleLowerCase().includes(event.target.value);
    })
    setSearchName(event.target.value);
    setFilterPerson(filterPersonArr);
    console.log('filterPerson:', filterPerson)
  }

  return (
    <div>
      <h2>PhoneBook</h2>
      <Notify message={successMessage} className={state}></Notify>
      <Filter searchName={searchName} handleSearchChange={handleSearchChange} />
      <h2>Add a new</h2>
      <PersonForm 
        addName={addName}
        newPerson={newPerson}
        newNumber={newNumber}
        handleValueChange={handleValueChange}
        handleNumberChange={handleNumberChange}  />
      <h2>Number</h2>
      {filterPerson.map(person => <Person key={person.id} person={person} resetData={resetData} ></Person>)}
    </div>
  )
}

export default PhoneBook