import express from "express";
import { router } from "./routes/"
import morgan from "morgan"
import dotenv from "dotenv"

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(morgan("dev"))
app.use("/api", router)

app.listen(port, () => {
    console.log(`✨server is working on port ${port}✨`);
})