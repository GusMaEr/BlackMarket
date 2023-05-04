import { RouterBrowser ,Routes, Route} from 'react-router-dom'
import Home from './Paginas/Home'
import AcercaDe from './Paginas/AcercaDe'
import Contacto from './Paginas/Contacto'
import Navbar from './Componentes/NavBar'



function App() {
  return (
    <>
   <Navbar/>
   <RouterBrowser>
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/Acerca de' element={<AcercaDe/>} />
        <Route path='Contacto' element={<Contacto/>} />
    </Routes>
    <RouterBrowser/>
     </>
  )
}

export default App;
