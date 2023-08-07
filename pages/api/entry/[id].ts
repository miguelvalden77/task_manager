import { db } from '@/database'
import { Entry } from '@/interfaces'
import EntryModel from '@/models/Entry.model'
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    switch (req.method) {

        case "PUT":
            return updateEntry(req, res)
        case "GET":
            return getEntry(req, res)
    }

}


const updateEntry = async (req: NextApiRequest, res: NextApiResponse) => {

    const { id } = req.query
    const { status, description } = req.body

    const entry = await EntryModel.findById(id)

    await db.connect()
    if (!entry) {
        await db.disconnect()
        res.status(400).json({ message: "No esxiste tal entrada" })
    }

    const updatedEntry = await EntryModel.findByIdAndUpdate(id, { status: status, description }, { runValidators: true, new: true })
    await db.disconnect()

    res.status(200).json(updatedEntry)

}

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Entry | any>) => {

    const { id } = req.query
    console.log({ id })

    try {
        await db.connect()
        const entry: Entry | null = await EntryModel.findById(id)
        await db.disconnect()

        res.status(200).json(entry)
    } catch (error: unknown) {
        console.log({ error })
        res.status(400).json({ errorMessage: "No se puede encontrar" })
    }

}
