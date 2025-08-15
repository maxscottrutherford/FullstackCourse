const Person = ({ person, removePerson }) => {
  return (
      <p>
        {person.name} {person.number} &#9; 
        <button onClick={removePerson}>delete</button>
      </p>
  )
}

const Persons = ({ persons, removePerson }) => (
  <div>
    {persons.map(person => 
      <Person 
        key={person.id} 
        person={person} 
        removePerson={() => removePerson(person.id)}
      />
    )}
  </div>
)

export default Persons