import express from 'express'
import cors from 'cors'
import LangRoutes from './routes/messages.js'
import bodyParser from "body-parser";


const app = express();

app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(express.json());
app.use(cors())

app.use("/api", LangRoutes)
app.listen(3000, () => {
    console.log("server is running on port 3000")
})

