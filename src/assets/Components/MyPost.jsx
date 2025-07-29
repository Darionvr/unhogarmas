import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Context/UserContext'


const Mypost = () => {

    const { token } = useContext(UserContext);
    const [myPets, setMyPets] = useState([])


    const findMyPets = async (token) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/pets/myPets`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("error:", errorData);
                return false;
            }

            const data = await response.json();
            console.log(data.results);
            return data

        } catch (error) {
            console.error("Network or unexpected error:", error);
            return false;
        }
    };

    useEffect(() => {
        const fetchPets = async () => {
            const pets = await findMyPets(token);
            setMyPets(pets.results);
        };
        if (token) fetchPets();
    }, [token])


    return (
        <>
            <div className="my-posts">
                <h2>Mis publicaciones</h2>

                {myPets.length === 0 ? (
                    <p> No tienes mascotas publicadas</p>
                ) : (

                    <div className="card-list">
                        {myPets.map(pet => (
                                     <Link className='card-link' key={pet.id} to={`/PetProfile/${pet.id}`}>
                            <div className="card" >
                                <div className="img">
                                    <img src={`${import.meta.env.VITE_BACKEND_URL}${pet.photo}`} alt="Mascota" />
                                </div>

                                <div className="cardInfo">
                                    <h3>{pet.name}</h3>
                                    <p>{pet.specie}, {pet.age}</p>
                                </div>
                            </div>
                                    </Link>

                        ))} 
                    </div>
                )}
                <div className="AddPetButton">
                    <button className='melon-button'>
                        <Link to="/CreatePost">
                            <FontAwesomeIcon icon={faFileCirclePlus} /> Agregar nueva mascota
                        </Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Mypost;