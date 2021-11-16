import React from 'react';
import styled from 'styled-components'
import BasicTable from './components/Table'
import { useState } from 'react'
import useCanciones from './hooks/useCanciones';
//import { useQuery } from 'react-query';
//import Table from './components/Table';
import PaginatioQueryTable from './components/PaginatioQueryTable';
import PaginationTable from './components/Paginationtable';


export default function Home({canciones, totalCanciones}) {  

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const skips = (page-1)*perPage;
  console.log('page='+page+ ' perPage='+perPage+' skips='+skips);
  const { data: canciones1 } = useCanciones(skips,perPage);
  console.log(canciones1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const lista = canciones1 ?? [];


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
  const cancionesMemo = React.useMemo(
    () => lista,[lista]
  );

  return (
    <Styles>
      <BasicTable 
      columns={columns} 
      data={cancionesMemo}
      />
    </Styles>
  )
}
/* export const getServerSideProps = async () => {
  const canciones = await prisma.cancion.findMany({
    select: {
      id: true,
      titulo: true,
      artista: true,
      year: true,
      genero: true,
    },
    /* skip: 4,
    take:5, 
  })

  const totalCanciones = await prisma.cancion.count();
  return {
    props: {canciones, totalCanciones},
  }
} */

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