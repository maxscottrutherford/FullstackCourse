import { useState } from "react";

const Filter = (props) => (
  <div>
    Filter shown with <input value={props.value} onChange={props.onChange} />
  </div>
)

const PersonForm = (props) => (
  <form onSubmit={props.onSubmit}>
  <div>
    name: <input value={props.newName} onChange={props.handlePersonChange}/>
  </div>
  <div>
    number: <input value={props.newNumber} onChange={props.handleNumberChange}/>
  </div>
  <div>
    <button type="submit">add</button>
  </div>
  </form>
)

const Persons = (props) => (
  <div>
    {props.persons.map(person => 
      <p key={person.name}>{person.name} {person.number}</p>
    )}
  </div>
)

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '193-284-3940' },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.map(person => person.name.toUpperCase()).includes(newName.toUpperCase())) {
      alert(`${newName} is already added to the phonebook`)
      setNewName('')
      setNewNumber('')
    }
    else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
  }

  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={searchValue} onChange={handleSearchChange} />
      <h3>Add New</h3>
      <PersonForm 
        onSubmit={addPerson} newName={newName} handlePersonChange={handlePersonChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange} 
      />
      <h3>Numbers</h3>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App