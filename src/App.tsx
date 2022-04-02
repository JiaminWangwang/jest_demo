import React from 'react'
import './App.css'

type propTypes = { title: string }
const App = (props: propTypes) => {
  const { title } = props

  return <div className="App">{title}</div>
}

export default App
