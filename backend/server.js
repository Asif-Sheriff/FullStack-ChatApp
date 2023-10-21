import express, {Router} from "express";
import cors from "cors";
import { connectDB } from "./database/models.js";

const router= Router();
const  app =express();
const port=3000;

//Express.json is used for accessing the request body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//Cors is used to enable support to make api calls
app.use(cors())

connectDB();
// connectContactsDB();

app.listen(port,(req,res)=>{
    console.log(`Server up at port ${port}`);
});