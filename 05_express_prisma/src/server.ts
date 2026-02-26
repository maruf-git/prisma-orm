import express, { type Request, type Response } from "express"
import { prisma } from "./lib/prisma"
const app = express()
app.use(express.json())

const port = 3000

app.get("/", async (req: Request, res: Response) => {
    res.send("app is running...")
})

app.post("/users", async (req: Request, res: Response) => {
    const user = req.body
    console.log(user)
    try {
        const newUser = await prisma.user.create({
            data: user
        })
        res.status(201).send(newUser)
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Failed to create user"
        })
    }
})

app.get("/users", async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).send({
            success: true,
            data: users
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "failed to fetch users"
        })
    }
})

app.listen(port, () => {
    console.log("app is running in port: ", port)
})