import mongoose from "mongoose";

// Making the schema for storing chats
export const chatSchema = new mongoose.Schema({
  chatText: String,
  chatDate: Date
});


//Schema to store contacts
export const contactsSchema = new mongoose.Schema({
  contactName: String,
//   contactDP:
});



 