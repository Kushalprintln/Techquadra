import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm/LoginForm.jsx'
import Dashboard from './Dashboard/Dashboard.jsx'
import BlankDashboard from './DashBoardPages/BlankDashboard.jsx'
import Maintanance from './DashBoardPages/Maintanance.jsx'
import Organization from './DashBoardPages/Organization.jsx'
import Accadmics from './DashBoardPages/Accadmics.jsx'
import SchoolRegisteration from './DashBoardPages/SchoolRegisteration.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index element={<LoginForm/>}/>
        <Route path='dashboard' element={<Dashboard/>}>
          <Route index element={<BlankDashboard/>}/>
          <Route path='maintanance' element={<Maintanance/>}/>
          <Route path='organization' element={<Organization />} />
          <Route path='accadmics' element={<Accadmics />} />
          <Route path='schoolregisteration' element={<SchoolRegisteration />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
