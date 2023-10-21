import mongoose from "mongoose";
import { chatSchema } from "./schema.js";
import { contactsSchema } from "./schema.js";

// Making models for the databases and exporting them
export const chatText =mongoose.model('chats', chatSchema);
export const contact =mongoose.model('contacts', contactsSchema);

//This function connect to the chats database
export async function connectDB(){
    await mongoose.connect('mongodb://127.0.0.1:27017/chatAppDB')
    .then(()=>{console.log("Connected to DB");});
      
}

