import { Navigate, Route, Routes } from 'react-router';
import './App.css'
import Home from './assets/Views/Home';
import Staff from './assets/Views/Staff';
import Register from './assets/Views/Register';
import Myprofile from './assets/Views/Myprofile';
import AdoptList from './assets/Views/AdoptList';
import AdoptionForm from './assets/Views/AdoptionForm';
import Voluntary from './assets/Views/Voluntary';
import CreatePost from './assets/Views/CreatePost';
import Navbar from './assets/Components/Navbar';
import Footer from './assets/Components/Footer';
import PetProfile from './assets/Views/PetProfile';
import { useContext } from 'react';
import { UserContext } from './assets/Context/UserContext';

function App() {

  const { token } = useContext(UserContext)


  return (
    <>

      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/Staff"
          element={<Staff />}
        />
        <Route
          path="/Register"
          element={<Register />}
        />
        <Route
          path="/Myprofile"
          element={token ? <Myprofile /> : <Navigate to="/" />}
        />
        <Route
          path="/AdoptList"
          element={<AdoptList />}
        />
        <Route
          path="/AdoptionForm"
          element={<AdoptionForm />}
        />
        <Route
          path="/Voluntary"
          element={<Voluntary />}
        />
        <Route
          path="/CreatePost"
          element={token ? <CreatePost /> : <Navigate to="/" />}
        />
        <Route
          path="/PetProfile"
          element={<PetProfile />}
        />
      </Routes>
      <Footer />

    </>
  )
}

export default App;
