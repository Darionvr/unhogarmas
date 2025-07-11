import React from 'react'

const TableCandidates = () => {
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
                        <tr>
                            <td>pepe</td>
                            <td>rodriguez</td>
                            <td>pepe@rodriguez.com</td>
                            <td>30</td>
                            <td>+56912345678</td>
                            <td>Calle Falsa 123</td>
                            <td>Casa</td>
                            <td>Sí</td>
                            <td>Max</td>
                            <td>Terapia</td>
                            <td>Solo</td>
                            <button className='confirmedForm'>✅</button>
                            <button className='deleteForm'>❌</button>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default TableCandidates;