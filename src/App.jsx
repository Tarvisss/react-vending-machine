
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import VendingMachine from './VendingMachine'
import Reeses from './Reeses'
import MilkyWay from './MilkyWay'
import Twix from './Twix'
import Home from './Home'
import "./App.css"



function App() {

  return (
    <BrowserRouter>
      <div>
        <VendingMachine/>
        <div className='Routes'>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/Reeses' element={<Reeses/>}></Route>
              <Route path='/MilkyWay' element={<MilkyWay/>}></Route>
              <Route path='/Twix' element={<Twix/>}></Route>
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
