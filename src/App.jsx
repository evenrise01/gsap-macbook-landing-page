import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Performance from './components/Performance'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Showcase from './components/Showcase'
import Highlights from './components/Highlights'
import Features from './components/Features'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main id="main">
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase/>
      <Performance/>
      <Highlights/>
      <Features/>
      <Footer/>
    </main>
  )
}

export default App
