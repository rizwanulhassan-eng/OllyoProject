
import './App.css'

import NavbarUIX from './components/navbar'
import Heading from './components/heading'
import Card from './components/card'
import  Carouselpage  from './components/carousel'
import Reviewbox from './components/reviewbox'
import Pricepage from './components/pricebox'
import Faqpage from './components/faq'
import Contactbox from './components/contactform'





function App() {

  return (
    <div style={{padding:"31px 112px",backgroundColor:" #F5F8FF"
    }}>
      <NavbarUIX />
      <Heading />
      <Card />
      <Carouselpage />
      <Reviewbox />
      <Pricepage />
      <Faqpage />
      <Contactbox />
      </div>
  )
}

export default App
