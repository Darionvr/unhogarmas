import { Route, Routes } from 'react-router';
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


function App() {


  return (
    <>
    <Navbar/>
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route
          path="/"
          element={<Staff/>}
        />
        <Route
          path="/"
          element={<Register/>}
        />
        <Route
          path="/"
          element={<Myprofile/>}
        />
        <Route
          path="/"
          element={<AdoptList/>}
        />
        <Route
          path="/"
          element={<AdoptionForm/>}
        />
        <Route
          path="/"
          element={<Voluntary/>}
        />
        <Route
          path="/"
          element={<CreatePost/>}
        />
      </Routes>

    </>
  )
}

export default App;
