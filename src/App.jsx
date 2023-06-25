import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Outlet, useOutletContext } from 'react-router-dom'


function Layout() {
  const [count, setCount] = useState(0)
  return <Outlet context={{ count: count, setCount: setCount }} />
}


function Home() {
  const { count, setCount } = useOutletContext()
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
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
