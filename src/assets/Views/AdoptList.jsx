import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../Components/Pagination';
import { jwtDecode } from 'jwt-decode';
import { UserContext } from '../Context/UserContext';


const AdoptList = () => {

  const { token } = useContext(UserContext);

  let decoded = null;

  if (token) {
    try {
      decoded = jwtDecode(token);
    } catch (error) {
      console.error('Token inválido o corrupto:', error);
    }
  }

  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [order, setOrder] = useState("asc");
  const [filtros, setFiltros] = useState({
    tamaño: '',
    especie: '',
    edad: ''
  });

  const getPets = async (page = 1, order = "asc") => {
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/pets?page=${page}&limit=5&order=${order}`);
      const data = await res.json();
      setAnimals(Array.isArray(data.results) ? data.results : []);
      setTotalPages(data.total_pages || 1);
      setNext(data.next);
      setPrevious(data.previous);
    } catch (err) {
      console.error('Error cargando mascotas:', err);
    } finally {
      setLoading(false);
    }
  };

  const deletePets = async (id) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/pets/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (res.ok) {
        setAnimals(prev => prev.filter(pet => pet.id !== id));
      } else {
        console.log("No se pudo eliminar la mascota");
      }
    } catch (error) {
      console.log('Error al eliminar la mascota', error);
    }
  }

  useEffect(() => {
    getPets(page, order);
  }, [page, order]);

  const filtrerSelect = (animal) => {
    const { especie, tamaño, edad } = filtros;
    const cumpleEspecie = !especie || animal.specie?.toLowerCase().trim() === especie.toLowerCase().trim();
    const tamañoAnimal = animal.weight <= 4 ? 'enano' : animal.weight <= 9 ? 'medianos' : 'grande';
    const cumpleTamaño = !tamaño || tamañoAnimal === tamaño;
    const cumpleEdad =
      !edad ||
      (edad === '<1' && animal.age < 1) ||
      (edad === '1=3' && animal.age >= 1 && animal.age <= 3) ||
      (edad === '>4' && animal.age >= 4);
    return cumpleEspecie && cumpleTamaño && cumpleEdad;
  };

  const filtrados = animals.filter(filtrerSelect);

  return (
    <div className='AdopListBody'>
      <h1>Encuentra a tu nuevo mejor amigo</h1>

      <div className='filtrer'>
        <select name='Especies' onChange={(e) => setFiltros({ ...filtros, especie: e.target.value })}>
          <option value="">Especie</option>
          <option value="Gato">Gato</option>
          <option value="Perro">Perro</option>
          <option value="Conejo">Conejo</option>
        </select>

        <select name="Tamaño" onChange={(e) => setFiltros({ ...filtros, tamaño: e.target.value })}>
          <option value="">Tamaño</option>
          <option value="enano">Menor a 4kg</option>
          <option value="medianos">5kg a 9kg</option>
          <option value="grande">Mayor a 10kg</option>
        </select>

        <select name="Edad" onChange={(e) => setFiltros({ ...filtros, edad: e.target.value })}>
          <option value="">Edad</option>
          <option value="<1">Menor de un año</option>
          <option value="1=3">Entre 1 y 3 años</option>
          <option value=">4">Más de 4 años</option>
        </select>
      </div>

      <div className='card-list'>
        {loading ? (
          <>
            <p>Cargando mascotas...</p>
          </>
        ) : (
          filtrados.map((animal) => (
            <div className='card' key={animal.id} >
              <Link to={`/petProfile/${animal.id}`} >
                <div className='img'>
                  <img src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${animal.photo}`} alt={animal.name} />
                </div>
                <div className='cardInfo'>
                  <h3>{animal.name}</h3>
                  <p>Sexo: <span>{animal.gender}</span></p>
                  <p>Edad: <span>{animal.age} años</span></p>
                  <p>Peso: <span>{animal.weight}kg</span></p>
                </div>
              </Link>
              {decoded?.role === 'administrador' && <button className='melon-button' onClick={() => deletePets(animal.id)}> Eliminar </button>}
            </div>
          ))
        )}
      </div>

      <div className='pagination-container'>
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          next={next}
          previous={previous}
          filtros={filtros}
          order={order}
          fetchPets={getPets}
        />
      </div>


    </div>
  );
};

export default AdoptList;
