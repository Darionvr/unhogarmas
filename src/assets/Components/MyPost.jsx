import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Mypost = () => {
    return (
        <>
            <div className="my-posts">
                <h2>Mis publicaciones</h2>
                <div className="card-list">
                    <div className="card">
                        <div className="img">
                            <img src="https://static.nationalgeographic.es/files/styles/image_3200/public/cv1_img8545-edit-copy.webp?w=1600&h=2134" alt="Mascota" />
                        </div>

                        <div className="cardInfo">
                            <h3>Nombre</h3>
                            <p>Raza, edad</p>
                        </div>

                        <button className="melon-button"> <Link to={`/PetProfile`}> <FontAwesomeIcon icon={faPenToSquare} />Editar información</Link></button>
                    </div>
                </div>
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