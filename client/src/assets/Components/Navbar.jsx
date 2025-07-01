import { Link } from "react-router"
import '../../App.css'
import HomeLogo from "../Icons/HomeIcon"
import PersonLogo from "../Icons/PersonIcon"
import PawIcon from "../Icons/PawIcon"




const Navbar = () => {
  return (
    <>
      <nav>

        <Link to="/"><HomeLogo />Un Hogar Más</Link>
        <Link to="/">Inicio</Link>
        <Link to="/Staff">Equipo</Link>
        <Link to="/Voluntary">Voluntarios</Link>
        <button><PawIcon /><Link to="/AdoptList">Adopta  </Link> </button>
        <PersonLogo />

      </nav>


    </>
  )
}

export default Navbar