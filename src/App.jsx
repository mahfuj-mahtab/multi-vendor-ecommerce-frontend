import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Carousel from './components/Carousel'
import MyCarousel from './components/Carousel'
import AllProducts from './components/AllProducts'
import AllCategory from './components/AllCategory'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
    <MyCarousel/>
    <AllCategory/>
    <AllProducts/>
    <Footer/>
    </div>
  )
}

export default App
