import React, {useState} from 'react';
import Filter from './components/person/filter'
import PersonForm from './components/person/personForm'
import Person from './components/person/persons'

const PhoneBook = () => {
  const [persons, setPerson] = useState([
    {name: 'Ken', id: 0, number: '12345678901'},
    {name: 'yang', id: 1, number: '12345678901'},
    {name: 'kenyang', id: 2, number: '12345678901'},
    {name: 'tao', id: 3, number: '12345678901'}
  ]);

  const [newPerson, setNewPerson] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');
  const [filterPerson, setFilterPerson] = useState(persons);

  const addName = (event) => {
    event.preventDefault();
    const flag = persons.some((person) => person.name === newPerson);
   
    if (flag) {
      alert(`${newPerson} is already added to phonebook`);
      setNewPerson('');
      setNewNumber('');
      return;
    }
    const newPersonObj = {
      name: newPerson,
      number: newNumber,
      id: persons.length + 1
    }
    setPerson(persons.concat(newPersonObj));
    setFilterPerson(persons.concat(newPersonObj));
    setNewPerson('');
    setNewNumber('');
    setSearchName('');
  }
  const handleValueChange = (event) => {
    console.log(event.target.value);
    setNewPerson(event.target.value);
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value);
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
      <Filter searchName={searchName} handleSearchChange={handleSearchChange} />
      <h2>Add a new</h2>
      <PersonForm 
        addName={addName}
        newPerson={newPerson}
        newNumber={newNumber}
        handleValueChange={handleValueChange}
        handleNumberChange={handleNumberChange}  />
      <h2>Number</h2>
      {filterPerson.map(person => <Person key={person.id} person={person}></Person>)}
    </div>
  )
}

export default PhoneBook