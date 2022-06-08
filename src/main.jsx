import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Login from './components/Login'
import Profile from './components/Profile'
import Register from './components/Register'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
			<Routes>			
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={
          <main>
            <p>404 - Page not found</p>
          </main>
        } />
			</Routes>
		</BrowserRouter>
  </React.StrictMode>
)
