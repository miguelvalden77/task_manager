import { isValidObjectId } from "mongoose"
import { db } from "."
import EntryModel from "@/models/Entry.model"
import { Entry } from "@/interfaces"



export const getEntryById = async (id: string): Promise<Entry | null> => {

    if (!isValidObjectId) return null

    await db.connect()
    const entry = await EntryModel.findById(id)
    await db.disconnect()

    return JSON.parse(JSON.stringify(entry))
}

