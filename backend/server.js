import express, {Router, text} from "express";
import cors from "cors";
import { Server } from 'socket.io'
import http from "http"
import { connectDB } from "./database/models.js";


const router= Router();
const  app =express();
const port=3000;
const server = http.createServer(app);
export const io = new Server(server);


//Express.json is used for accessing the request body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//Cors support
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,POST',
}));

io.on('connection',(socket)=>{
    console.log("User has connected");
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on("send-text",(text)=>{
      socket.broadcast.emit("pass-message",text);
      // console.log(text);
    })

});



connectDB();
// connectContactsDB();

server.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});