import mongoose from "mongoose";


const mongoConnection = {
    isConnected: 0
}

export const connect = async () => {

    if(mongoConnection.isConnected){
        console.log("Ya estamos conectados")
        return
    }

    if(mongoose.connections.length > 0){
        mongoConnection.isConnected = mongoose.connections[0].readyState

        if(mongoConnection.isConnected === 1){
            console.log("Usando conexion anterior")
            return
        }

        await mongoose.disconnect()
    }

    await mongoose.connect(process.env.MONGO_URL || "")
    mongoConnection.isConnected = 1
    console.log("conectado a mongoDB: " + process.env.MONGO_URL)
}

export const disconnect = async () => {

    if(mongoConnection.isConnected !== 0) return

    await mongoose.disconnect()
    console.log("Desconectado de la base de datos")
}
