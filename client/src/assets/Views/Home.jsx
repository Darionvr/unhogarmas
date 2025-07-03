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
        <img src="imgs\header-1.png" alt="" />
       </div>
       <h1>Desde Santiago, rescatamos vidas y creamos hogares.</h1>
      </header>

      <main className='main-home'>

        <section>

          <h2>  Al adoptar con nosotros </h2>


          <div>

            <img src="imgs\home-frame 1.png" alt="" />
            <div className='section-cards'>
              <div className="cards">
               
                <BoneIcon/>
                <h3>Ayudas a una vida en espera</h3>
                <p>Le das una segunda oportunidad a un ser que ha pasado por abandono o maltrato. </p>
              </div>
              <div className="cards">
                 <BoneIcon/>
                <h3>Libera espacio para otro rescate</h3>
                <p>Cada adopción permite que podamos acoger a otro animal necesitado. Es un acto que se multiplica. </p>
              </div>
              <div className="cards">
                 <BoneIcon/>
               <h3>Cuidas tu salud emocional</h3>
                <p>Está comprobado que compartir tu vida con una mascota reduce el estrés y mejora el bienestar emocional. </p>
              </div>
              <div className="cards">
                 <BoneIcon/>
                <h3>Compañía incondicional</h3>
                <p>Adoptar suma tu vida un amigo que te acompañará en todo momento, con amor y sin condiciones. </p>
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