import { Link } from "react-router"



const Navbar = () => {
  return (
    <>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/CreatePost">CreatePost</Link>
        <Link to="/AdoptList">AdoptList</Link>
        <Link to="/CreatePost">CreatePost</Link>
        <Link to="/MyProfile">My Profile</Link>
        <Link to="/PetProfile">Pet Profile</Link>
        <Link to="/Register">Register</Link>
        <Link to="/Staff">Staff</Link>
        <Link to="/Voluntary">Voluntary</Link>
    </nav>

    
    </>
  )
}

export default Navbar