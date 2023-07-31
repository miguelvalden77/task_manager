
interface seedData {
    entries: seedEntry[]
}

interface seedEntry {
    description: string,
    createdAt: number,
    status: string
}

export const seedData: seedData = {
    entries: [
        {
            description: "Pending: corrupti aut veniam sed ut quia tempore esse non sit, architecto aliquam.",
            createdAt: Date.now(),
            status: "Pending"
        },
        {
            description: "In progress: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, eum voluptatum distinctio sint minima soluta",
            createdAt: Date.now() + 2000000,
            status: "In progress"
        },
        {
            description: "Finished: nisi necessitatibus reprehenderit, suscipit iure? Nam delectus odit veritatis est, recusandae animi.",
            createdAt: Date.now() + 10000,
            status: "finished"
        }
    ]
}
