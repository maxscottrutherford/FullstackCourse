//moved Note component into its own file in components folder, better to keep these separate
import Note from "./components/Note"

const App = (props) => {
  const { notes } = props
  
  //change note => note.id or note.important will show array of those values
  const result = notes.map(note => note.content)
  console.log(result)

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App