import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/userRouter.js";
import structureRoute from "./routes/structureRouter.js"

const app = express();
const port = 5000;

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/project', {
    useNewUrlParser: true ,
    useUnifiedTopology : true    
});

const db = mongoose.connection;
db.on('error' , e => console.log(e));
db.once('open' , ()=> console.log(`Database Connected...`));

app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(structureRoute);

app.listen(port , ()=> console.log(`Server Up and Running in http://localhost:${port}`));