import { Outlet } from 'react-router-dom'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  )
}

export default App
