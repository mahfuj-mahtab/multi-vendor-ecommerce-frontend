import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Carousel from './components/Carousel'
import MyCarousel from './components/Carousel'
import AllProducts from './components/AllProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
    <MyCarousel/>
    <AllProducts/>
    </div>
  )
}

export default App
