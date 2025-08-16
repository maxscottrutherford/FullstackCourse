import { useState, useEffect } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [message, setMessage] = useState(null)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.map(person => person.name.toUpperCase()).includes(newName.toUpperCase())) {
      const person = persons.find((p) => p.name.toUpperCase() === newName.toUpperCase())
      const changedPerson = { ...person, number: newNumber }

      if (window.confirm(`${person.name} is already added to phonebook, replace number?`)) {
        personService
          .update(person.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(persons.map((person) => (person.id !== changedPerson.id ? person : returnedPerson)))
          })
          .catch((error) => {
            setIsError(true)
            setMessage(
              `${person.name} was already deleted from phonebook`
            )
            setTimeout(() => {
              setMessage(null)
              setIsError(false)
            }, 3000)
            setPersons(persons.filter((p) => p.id !== changedPerson.id))
          })
        setMessage(
          `${person.name} has had their number changed`
        )
        setTimeout(() => {
          setMessage(null)
        }, 3000)
      }
    }
    else {
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson))
      })
      setMessage(
          `${newName} has been added to phonebook`
        )
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    }
    setNewName('')
    setNewNumber('')
  }

  const removePerson = (id) => {
    const person = persons.find((p) => p.id === id)
    if (window.confirm(`Are you sure you want to delete ${person.name}?`)) {
      console.log(`${person.name} deleted`)
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter((p) => p.id !== id))
        })
    }
    else {
      console.log(`${person.name} not deleted`)
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
      <Notification message={message} isError={isError}/>
      <Filter value={searchValue} onChange={handleSearchChange} />
      <h3>Add New</h3>
      <PersonForm 
        onSubmit={addPerson} newName={newName} handlePersonChange={handlePersonChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange} 
      />
      <h3>Numbers</h3>
      <Persons persons={filteredPersons} removePerson={removePerson}/>
    </div>
  )
}

export default App