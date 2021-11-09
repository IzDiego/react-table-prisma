import React from 'react';
import styled from 'styled-components'
//import prisma from '../lib/prisma'
import BasicTable from './components/Table';
import { useEffect, useState } from 'react'


export default function Home() {  

  const[reactData, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/obtenDatos')
    .then(res => res.json())
    .then(data => {
      setData(data);
    }).catch((e) => {console.log(e)});
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Titulo",
        accessor: "titulo" // accessor is the "key" in the data
      },
      {
        Header: "Artista",
        accessor: "artista"
      },
      {
        Header: "Año",
        accessor: "year"
      },
      {
        Header: "Genero",
        accessor: "genero"
      }
    ],
    []
  );
  console.log(reactData)
  const data = React.useMemo(
    () => reactData,[reactData]
  );

  return (
    <Styles>
      <>{reactData && <BasicTable columns={columns} data={data}/>}</>
    </Styles>    
  )
}

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`