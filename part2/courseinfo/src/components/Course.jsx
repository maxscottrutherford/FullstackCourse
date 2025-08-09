const Header = (props) => <h1>{props.course.name}</h1>

const Content = (props) => (
  <div>
    {props.course.parts.map(part =>
        <Part key={part.id} part={part}/>
    )}
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => {
    const total = props.course.parts.reduce((sum, part) => sum + part.exercises, 0)

    return (
        <h4>Total of {total} exercises</h4>
    )
}

const Course = (props) => (
    <>
        {props.courses.map(course =>
            <div key={course.id}>
                <Header  course={course} />
                <Content  course={course} />
                <Total  course={course} />
            </div>
        )}
    </>
)

export default Course