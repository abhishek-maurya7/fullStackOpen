import { useState } from 'react'
const FeedbackButton = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
const StatisticLine = (props) => {
  return (
    <div>
      <table>
        <tbody>
        <tr>
          <td>{props.label}</td>
          <td>{props.value}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}
const Statistics = (props) => {
  const {good, neutral, bad} = props;
  const total = good + neutral + bad;
  if(total === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <StatisticLine label="good" value={good} />
      <StatisticLine label="neutral" value={neutral} />
      <StatisticLine label="bad" value={bad} />
      <StatisticLine label="all" value={total} />
      <StatisticLine label="average" value={total / 3} />
      <StatisticLine label="good" value={((good / total) * 100).toFixed(1)} />
    </div>
  )
}
function App() {
  const [good, setGood] = useState(0)
  const [neutral, setneutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <FeedbackButton handleClick={() => setGood(good + 1)} text="good" />
      <FeedbackButton handleClick={() => setneutral(neutral + 1)} text="neutral" />
      <FeedbackButton handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )  
}
export default App;
