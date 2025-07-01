import React from 'react'
import '../../App.css'
import { BoneIcon } from '../Icons/BoneIcon'

const Home = () => {
  return (

    <>
      <header>
       
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

          <p>Ubicación pendiente #123, comuna, Ciudad</p>
          <p>Contáctanos al 630-323-5630</p>
          <p>Horario Lun - Vie 10:00 a 18:00</p>
          <p>correo@correo.cl</p>

        </div>
        
      </article>
    </>
  )
}

export default Home