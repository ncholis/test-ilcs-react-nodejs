import './App.css'

//Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Component
import Navbar from './components/Navbar/Navbar'
import TableData from './components/TableData/TableData'

const App = () => {
  return (
    <>
    <Navbar />
    <TableData />
    <ToastContainer />
    </>
  )
}

export default App
