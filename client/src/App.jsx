// import { useState } from 'react'
import './App.css'
import Login from './Login'
import Signup from './signup'
import Home from './Home'
import {BrowserRouter , Route, Routes} from 'react-router-dom'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <> 
      <BrowserRouter>
      <Routes  >
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
