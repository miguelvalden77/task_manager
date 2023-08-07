import { db } from '@/database'
import { Entry } from '@/interfaces'
import EntryModel from '@/models/Entry.model'
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  switch (req.method) {

    case "GET":
      return getEntries(res)

    case "POST":
      return createEntry(req, res)
  }

}

const getEntries = async (res: NextApiResponse<Entry[]>) => {

  await db.connect()
  const entries: Entry[] = await EntryModel.find()
  await db.disconnect()

  res.status(200).json(entries)

}

const createEntry = async (req: NextApiRequest, res: NextApiResponse) => {

  const { description } = req.body

  await db.connect()
  const entry: Entry = await EntryModel.create({ description, createdAt: Date.now(), status: "Pending" })
  await db.disconnect()

  res.status(200).json({ entry })
}
