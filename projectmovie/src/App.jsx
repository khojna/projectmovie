


import './css/App.css'
import Home from './page/Home'
import {Route,Routes} from 'react-router-dom'
import Navbar from './Component/navbar'
import { MovieProvider } from './Context/MoviesContent'
import Favorites from './page/Favorites'
import './css/MovieCard.css'

function App() {


  return (
    <>
    <MovieProvider>
      <Navbar/>
      <main className='mainContain'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
      </main>
    </MovieProvider>
    </>
  )
}

export default App
