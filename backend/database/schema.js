import mongoose from "mongoose";

// Making the schema for storing chats
export const chatSchema = new mongoose.Schema({
  message_id: {
    type: String, 
    required: true,
    unique: true,
  },
  sender_id: {
    type: String, 
    required: true,
  },
  receiver_id: {
    type: String, 
    required: true,
  },
  message_content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});



//Schema to store contacts
export const contactsSchema = new mongoose.Schema({
  contactName: String,
//   contactDP:
});



 