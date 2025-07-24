import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdoptList = () => {
  const [animals, setAnimals] = useState([]);
  const [tamaño, setTamaño] = useState('');
  const [especie, setEspecie] = useState('');
  const [edad, setEdad] = useState('');
  const [loading, setLoading] = useState(false);




  useEffect(() => {
    const fetchAnimals = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/pets`);
        const data = await res.json();
        console.log('Datos recibidos:', data);
        setAnimals(Array.isArray(data.results) ? data.results : []);
        console.log('Animales:', Array.isArray(data) ? data : data.pets || []);
      } catch (err) {
        console.error('Error cargando mascotas:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  const filtrerSelect = (animal) => {
    const cumpleEspecie = !especie || animal.specie.toLowerCase().trim() === especie.toLowerCase().trim();
    const cumpleTamaño = !tamaño || animal.size === tamaño;
    const cumpleEdad =
      !edad ||
      (edad === '<1' && animal.age < 1) ||
      (edad === '1=3' && animal.age >= 1 && animal.age <= 3) ||
      (edad === '>4' && animal.age >= 4);

    return cumpleEspecie && cumpleTamaño && cumpleEdad;
  };

  const filtrados = animals.filter(filtrerSelect);
  return (
    <>
      <div className='AdopListBody'>
        <h1>Encuentra a tú nuevo mejor amigo</h1>

        <div className='filtrer'>
          <select name='Especies' onChange={(e) => { setEspecie(e.target.value) }}>
            <option value="">Especie</option>
            <option value="Gato">Gato</option>
            <option value="Perro">Perro</option>
            <option value="Conejo">Conejo</option>
          </select>

          <select name="Tamaño" onChange={(e) => { setTamaño(e.target.value) }}>
            <option value="">Tamaño</option>
            <option value="grande">+10kg</option>
            <option value="medianos">5kg-10kg</option>
            <option value="enano">1kg-5kg</option>
          </select>

          <select name="Edad" onChange={(e) => { setEdad(e.target.value) }}>
            <option value="">Edad</option>
            <option value="<1">Menor de un año</option>
            <option value="1=3">Entre 1 año a 3 años</option>
            <option value=">4">Mayor de 4 años</option>
          </select>
        </div>

        <div className='card-list'>
          {loading ? (
            <p>Cargando mascotas...</p>
          ) : (
            filtrados.map((animal) => (
              <div className='card' key={animal.id}>
                <div className='img'>
                  <Link to={`/PetProfile/${animal.id}`}>
                    <img src={animal.imagen} alt={animal.nombre} />
                  </Link>
                </div>
                <div className='cardInfo'>
                  <h3>{animal.name}</h3>
                  <p>Sexo: <span>{animal.gender}</span></p>
                  <p>Edad: <span>{animal.age} años</span></p>
                  <p>Peso: <span>{animal.weight}kg</span></p>
                </div>
              </div>
            ))
          )}
        </div>



      </div>
    </>
  );
};

export default AdoptList;