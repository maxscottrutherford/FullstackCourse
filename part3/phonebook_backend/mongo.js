const mongoose = require('mongoose')

const password = process.argv[2]

const url =
`mongodb+srv://maxscottrutherford:${password}@cluster0.cx0x97l.mongodb.net/phonebookApp?
retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) { //show phonebook list option
  console.log('phonebook:')
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
}

else if (process.argv.length === 5) { //add person to phonebook option
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
  })

  person.save().then(() => {
    console.log(`added ${person.name} number ${person.number} to phonebook`)
    mongoose.connection.close()
  })
}

else {
  console.log('invalid use, use as follows:')
  console.log('node mongo.js yourpassword [name] [number]')
  console.log('enter no name and no number to see list')
  console.log('enter name and number to add to phonebook db')
  process.exit(1)
}