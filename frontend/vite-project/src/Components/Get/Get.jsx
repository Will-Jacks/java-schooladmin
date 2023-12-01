import React, { useState } from 'react'

const Get = () => {

    const[fetchData, setFetchData] = useState([]);
    
    const url = "http://localhost:8080/api/turmas";
    
    fetch(url)
        .then(response => response.json())
        .then(data => setFetchData(data));

    const handleConsultar = ()=> {
        console.log(fetchData);
    }

  return (
    <div>
        <h1>Consulta de banco de dados</h1>

        <h3>Turmas cadastradas: </h3>
        {
            fetchData != null ? fetchData.map((data, index)=> {
                return(
                    <p key={index}>{data.nome}</p>
                )
            })
            :
            <p></p>

        }
        <button onClick={handleConsultar}>Consultar</button>
    </div>
  )
}

export default Get