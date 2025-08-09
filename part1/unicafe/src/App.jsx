import { useState } from "react";

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}


const StatisticsLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({clicks}) => {

  const all = clicks.good + clicks.bad + clicks.neutral
  const average = (clicks.good - clicks.bad) / all
  const positive = (clicks.good / all) * 100

  if (all === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }
  else {
    return (
      <table>
        <tbody>
          <StatisticsLine text="good" value={clicks.good} />
          <StatisticsLine text="neutral" value={clicks.neutral} />
          <StatisticsLine text="bad" value={clicks.bad} />
          <StatisticsLine text="all" value={all} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={positive + ' %'} />
        </tbody>
      </table>
    )
  }
}

const App = () => {
  //save clicks of each button to its own state
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () => {
    const newClicks = {
      ...clicks,
      good: clicks.good + 1
    }
    setClicks(newClicks)
  }

  const handleNeutralClick = () => {
    const newClicks = {
      ...clicks,
      neutral: clicks.neutral + 1
    }
    setClicks(newClicks)
  }

  const handleBadClick = () => {
    const newClicks = {
      ...clicks,
      bad: clicks.bad + 1
    }
    setClicks(newClicks)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <h1>Statistics</h1>
      <Statistics clicks={clicks}/>
    </div>
  )
}

export default App