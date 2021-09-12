import mongoose from "mongoose";

const convoSchema = mongoose.Schema({
  name: String,
  message: String,
  timestamp: String,
  profilePic: String,
});

export default mongoose.model("chats", convoSchema);
