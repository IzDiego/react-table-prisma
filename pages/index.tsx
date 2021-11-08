import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import styles from '../styles/Home.module.css'
import prisma from '../lib/prisma'
import BasicTable from './components/Table';
import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next';


export default function Home() {  

  const[reactData, setReactData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/obtenDatos')
    .then(res => res.json())
    .then(data => {
      setReactData(data);
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
    () => reactData,[]
  );

  return (
    <BasicTable columns={columns} data={reactData}/>
  )
}