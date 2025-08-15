const Note = ({ note, toggleImportance }) => {
  const label = note.important ? 'make not important' : 'make important'

  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

const Notes =({ notes, showAll, toggleImportanceOf }) => {
  const notesToShow = showAll ? notes : notes.filter((note) => note.important)

  return (
    <ul>
      {notesToShow.map((note) => (
        <Note
          key={note.id}
          note={note}
          toggleImportance={() => toggleImportanceOf(note.id)}
        />
      ))}
    </ul>    
  )

}

export default Notes