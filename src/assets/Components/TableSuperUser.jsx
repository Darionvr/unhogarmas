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
    }, []);

    return (
        <>
            <div className="tableContainer">
                <h3>Registro de Solicitudes de Adopción</h3>
                <table className='tableAdoption'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo</th>
                            <th>Edad</th>
                            <th>Celular</th>
                            <th>Domicilio</th>
                            <th>Tipo de Vivienda</th>
                            <th>Permite Mascotas</th>
                            <th>Nombre de la Mascota</th>
                            <th>por que desea adoptar</th>
                            <th>Convivencia</th>


                        </tr>
                    </thead>
                    <tbody>
                        {requests
                            .filter((r) => r.status === "pendiente")
                            .map((r) => (
                                <tr key={r.id}>
                                    <td>{r.nombre}</td>
                                    <td>{r.apellido}</td>
                                    <td>{r.correo}</td>
                                    <td>{r.age}</td>
                                    <td>{r.phone}</td>
                                    <td>{r.address}</td>
                                    <td>{r.housing_type}</td>
                                    <td>{r.allows_pets ? "Sí" : "No"}</td>
                                    <td>{r.pet_name}</td>
                                    <td>{r.reason}</td>
                                    <td>{r.household}</td>
                                    <td>
                                        <button className='confirmedForm'>✅</button>
                                        <button className='deleteForm'>❌</button>
                                    </td>
                                </tr>
                            ))}

                    </tbody>
                </table>
            </div>

            <div>
                <div className="tableContainer1">
                    <h3>Canditatos aceptados</h3>
                    <table className='tableConfirmed'>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Correo</th>
                                <th>Edad</th>
                                <th>Celular</th>
                                <th>Domicilio</th>
                                <th>Tipo de Vivienda</th>
                                <th>Permite Mascotas</th>
                                <th>Nombre de la Mascota</th>
                                <th>por que desea adoptar</th>
                                <th>Convivencia</th>


                            </tr>
                        </thead>
                        <tbody>
                            {requests
                                .filter((r) => r.status === "aceptada")
                                .map((r) => (
                                    <tr key={r.id}>
                                        <td>{r.nombre}</td>
                                        <td>{r.apellido}</td>
                                        <td>{r.correo}</td>
                                        <td>{r.age}</td>
                                        <td>{r.phone}</td>
                                        <td>{r.address}</td>
                                        <td>{r.housing_type}</td>
                                        <td>{r.allows_pets ? "Sí" : "No"}</td>
                                        <td>{r.pet_name}</td>
                                        <td>{r.reason}</td>
                                        <td>{r.household}</td>
                                    </tr>
                                ))}

                        </tbody>
                    </table>
                </div>


            </div>

        </>
    )
}

export default TableSuperUser;