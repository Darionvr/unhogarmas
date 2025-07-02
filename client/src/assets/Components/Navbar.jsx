import { Link } from "react-router"
import '../../App.css'
import HomeLogo from "../Icons/HomeIcon"
import PersonLogo from "../Icons/PersonIcon"
import PawIcon from "../Icons/PawIcon"
import { useRef } from "react"
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



const Navbar = () => {

  const dialogRef = useRef(null);
  const openModal = () => dialogRef.current.showModal();
  const closeModal = () => dialogRef.current.close();

  return (
    <>
      <nav>

        <Link to="/"><HomeLogo />Un Hogar Más</Link>
        <Link to="/">Inicio</Link>
        <Link to="/Staff">Equipo</Link>
        <Link to="/Voluntary">Voluntarios</Link>
        <button><PawIcon /><Link to="/AdoptList">Adopta  </Link> </button>


        <button className="login-button" onClick={openModal}> <PersonLogo /> </button>
        <dialog ref={dialogRef}>
          <button onClick={closeModal}><FontAwesomeIcon icon={faSquareXmark} size="2x" /></button>
          <p>Bienvenido de vuelta</p>
          <h1> Inicia sesión</h1>
          <form className="login-form" action="">
            <input type="text" />
            <input type="password" name="" id="" />
            <p>¿Olvidaste tu contraseña?</p>
            <button type="submit"> Ingresar </button>
            <p>¿No tienes una cuenta? Regístrate</p>
          </form>
        </dialog>


      </nav>



    </>
  )
}

export default Navbar