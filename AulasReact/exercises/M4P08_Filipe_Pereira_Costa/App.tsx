import { Routes, Route } from "react-router-dom"
import Home from './pages/HomePage.tsx'
import Destinations from './pages/Destinations.tsx'
import Packages from './pages/Packages.tsx'
import Contacts from './pages/Contacts.tsx'
import FallBack from './pages/_404Page.tsx'
import Navbar from  './components/navbar.tsx'




function App() {

  return (

    <>

    <Navbar/>
    <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/destinations" element={<Destinations/>}></Route>
      <Route path="/packages" element={<Packages/>}></Route>
      <Route path="/contacts" element={<Contacts/>}></Route>
      <Route path="*" element={<FallBack/>}></Route>
    </Routes>






    
    </>
  )
}

export default App
