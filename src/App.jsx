import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { RecoilRoot } from 'recoil'
import { LoginPage } from './pages/auth/LoginPage'
import { Route, Routes } from 'react-router-dom'
import { CRM } from './pages/App'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {
  const [count, setCount] = useState(0)
  
  
  return (
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<h1>Home</h1>} /> 
        <Route path='/app' element={<ProtectedRoutes />} >
          <Route path='/app/*' element={<RecoilRoot><CRM /></RecoilRoot>} />
        </Route>
        <Route path='*' element={<h1>404</h1>} /> 
      </Routes>
  )
}

export default App
