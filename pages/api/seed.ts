import { db } from '@/database'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name?: string,
  message?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if(process.env.NODE_ENV === "production"){
        return res.status(401).json({message: "No tienes acceso al servicio"})
    }

    await db.connect()



    await db.disconnect()



  res.status(200).json({ message: 'Proceso realizado correctamente' })
}
