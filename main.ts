import cors from "cors"
import express, { Application, Request,Response } from "express"
import auth from "./Router/authRouter"

const main =(app:Application)=>{
    app.use(express.json())
    app.use(cors({
        methods:["GET" ,"POST", "PATCH", "DELETE"]
    }))

    app.use("/api/v2/auth", auth)


    app.get("/", (req:Request, res:Response)=>{
try {
    return res.status(200).json({
        message:"welcome home 👍😊"
    })
} catch (error) {
    return res.status(404).json({
message:"error"
    })
}
    })
}

export default main