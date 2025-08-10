import ReactDOM from 'react-dom/client'
import App from './App'

// const notes = [
//   {
//     id: 1,
//     content: 'HTML is easy',
//     important: true
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only JavaScript',
//     important: false
//   },
//   {
//     id: 3,
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     important: true
//   }
// ]

// const promise = axios
//   .get('http://localhost:3001/notes')
//   .then(response => {
//     const notes = response.data
//     console.log(notes.map(note => note.content))
// })

// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2)
// will return a "rejected" promise

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)