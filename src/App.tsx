import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes'
import PublicRoutes from './components/PublicRoutes/PublicRoutes'
import CreateNote from './pages/CreateNote/CreateNote'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import Notes from './pages/Notes/Notes'
import Profile from './pages/Profile/Profile'
import Signup from './pages/Signup/Signup'

function App() {
  return (
    <>
      <PublicRoutes>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </PublicRoutes>
      <PrivateRoutes>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/create-note/:id?" element={<CreateNote />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </PrivateRoutes>
    </>
  )
}

export default App
