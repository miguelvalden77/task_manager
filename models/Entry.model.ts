import { Entry } from "@/interfaces"
import { Model, Schema, model, models } from "mongoose"

interface IEntry extends Entry { }

const entrySchema = new Schema(
    {
        description: {
            type: String,
            required: true
        },
        createdAt: {
            type: Number
        },
        status: {
            type: String,
            enum: {
                values: ["Pending", "In progress", "finished"],
                message: "{VALUE} no está permitido",
            },
            default: "Pending"
        }
    }
)

const EntryModel: Model<IEntry> = models.Entry || model("Entry", entrySchema)

export default EntryModel