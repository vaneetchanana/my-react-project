import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function Home() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Home-page</h1>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </>
  )
}


function About() {
  return (
    <>
      <h1>About-page</h1>
    </>
  )
}


function Contact() {
  return (
    <>
      <h1>Contact-page</h1>
    </>
  )
}


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
