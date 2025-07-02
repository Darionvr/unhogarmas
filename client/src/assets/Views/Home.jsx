import React from 'react'
import '../../App.css'
import { BoneIcon } from '../Icons/BoneIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox, faCalendarWeek, faMobileScreenButton, faMapLocationDot} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (

    <>
      <header>
       <div>
        <img src="imgs\Header, frame 1.png" alt="" />
        <h1>Desde Santiago, rescatamos vidas y creamos hogares.</h1>
       </div>
      </header>

      <main className='main-home'>

        <section>

          <h2>  Nuestro Proceso de Adopción </h2>


          <div className='section-cards'>

            <img src="imgs\Depth 7, Frame 0.png" alt="" />
            <div>
              <div className="text-cards">
               
                <BoneIcon/>
                <h3>Titulo</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
              <div className="text-cards">
                 <BoneIcon/>
                <h3>Titulo</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
              <div className="text-cards">
                 <BoneIcon/>
               <h3>Titulo</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
              <div className="text-cards">
                 <BoneIcon/>
                <h3>Titulo</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
            </div>
          </div>
          <button> leer más...</button>
        </section>

      </main>
      <article>
        <div className="info">

          <h4> ¿Dónde estamos?</h4>

          <p> <FontAwesomeIcon icon={faMapLocationDot} />Ubicación pendiente #123, comuna, Ciudad</p>
          <p> <FontAwesomeIcon icon={faMobileScreenButton} />Contáctanos al 630-323-5630</p>
          <p> <FontAwesomeIcon icon={faCalendarWeek} />Horario Lun - Vie 10:00 a 18:00</p>
          <p> <FontAwesomeIcon icon={faInbox} /> correo@correo.cl</p>

        </div>
        <div className="map">
        
        </div>
        
      </article>
    </>
  )
}

export default Home