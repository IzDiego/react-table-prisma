import React from "react";
import { useQuery } from "react-query";
//import prisma from '../../lib/prisma';
import { PrismaClient } from "@prisma/client";

export default function useCanciones(skip, take) {
  const link = `http://localhost:3000/api/obtenDatos?skip=${skip}&take=${take}`;
      return useQuery(
        ['canciones', link],
        async () => {
          console.log(link)
          const res = await fetch(link);
            
            /* fetch(`http://localhost:3000/api/obtenDatos`,{
            method: 'POST',
            body: JSON.stringify(mergeBody),
            headers:{
              'Content-Type':'applications/json'         
            }
          }); */

          return res.json();
        } ,
        { keepPreviousData: true })
    };
 