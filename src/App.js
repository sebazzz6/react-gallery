import Cards from './components/Card.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ArrImg from './components/arrInfo.jsx'
import React from 'react'


const imgSkyLine = require.context('./assets/img', true)
function App() {
  return (
    <div>
      <Header
        title="Galería de Imágenes con
        React - Nissan SkyLine GTR History"
        alignment="center"
        classname="header_title"
      />
      <div className="card_container">
        {ArrImg.map((e) => (
          <Cards
            key={e.id}
            src={imgSkyLine(e.src)}
            alt={e.alt}
            name={e.name}
            generation={e.generation}
            age={e.age}
            history={e.history}
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}
export default App
