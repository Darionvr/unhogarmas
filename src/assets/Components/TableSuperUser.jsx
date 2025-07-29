import { useEffect, useState } from 'react';

const TableSuperUser = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const res = await fetch('http://localhost:5000/request', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                const data = await res.json();
                if (res.ok) {
                    setRequests(data.results);
                } else {
                    console.error(data.message);
                }
            } catch (error) {
                console.error('Error al obtener solicitudes:', error);
            }
        };

        fetchRequests();
    }, [])
    const handleAccept = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/request/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({ status: "aceptada" }),
            });

            if (res.ok) {
                setRequests(prev => prev.map(r => r.id === id ? { ...r, status: "aceptada" } : r));
            } else {
                console.error("Error al aceptar solicitud");
            }
        } catch (error) {
            console.error("Error al aceptar:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/request/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            if (res.ok) {
                setRequests(prev => prev.filter(r => r.id !== id));
            } else {
                console.error("Error al eliminar solicitud");
            }
        } catch (error) {
            console.error("Error al eliminar:", error);
        }
    };

    const renderCard = (r, showButtons = true) => (
        <div className="card1" key={r.id}>
            <div className="card-image">
                <img
                    src={r.user_imagen ? `http://localhost:5000/uploads/${r.user_imagen}` : "/user-placeholder.png"}

                    alt="Foto de perfil"
                />

            </div>
            <div className="card-info">
                <div className="info-column">
                    <p><strong>Nombre:</strong> {r.user_nombre}</p>
                    <p><strong>Apellido:</strong> {r.user_apellido}</p>
                    <p><strong>Correo:</strong> {r.user_correo}</p>
                    <p><strong>Edad:</strong> {r.age} años</p>
                    <p><strong>Celular:</strong> {r.phone}</p>
                    <p><strong>Domicilio:</strong> {r.address}</p>
                    <p><strong>Tipo de Vivienda:</strong> {r.housing_type}</p>
                    <p><strong>Permite Mascotas:</strong> {r.allows_pets ? 'Sí' : 'No'}</p>
                    <p><strong>Nombre de la Mascota:</strong> {r.pet_name}</p>
                    <p><strong>Por qué desea adoptar:</strong> {r.reason}</p>
                    <p><strong>Convivencia:</strong> {r.household}</p>
                </div>
            </div>

            {showButtons && (
                <div className="card-actions">
                    <button className="btn-confirm" onClick={() => handleAccept(r.id)}>✅</button>
                    <button className="btn-reject" onClick={() => handleDelete(r.id)}>❌</button>
                </div>
            )}
        </div>

    );

    return (
        <>
            <h2>Registro de Solicitudes de Adopción</h2>
            <div className="cards-container1">
                <div className="cards-wrapper">
                    {requests.filter(r => r.status === "pendiente").map(r => renderCard(r))}
                </div>

                {/* <h2>Candidatos Aceptados</h2> */}
                <div className="cards-wrapper">
                    {requests.filter(r => r.status === "aceptada").map(r => renderCard(r, false))}
                </div>
            </div>
        </>
    );
};


export default TableSuperUser;