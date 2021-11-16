import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { prisma } from "../../lib/prisma";

export default async function handle(req, res){

  try{
    const { take, skip } = req.query;
    const misDatos = await prisma.cancion.findMany({
      skip: parseInt(take),
      take: parseInt(skip),
    });
    res.json(misDatos);
  }catch(error){
    res.status(400).json({error});
  }

}
