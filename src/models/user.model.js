import mongoose from "mongoose";

const userCollection = "User";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
    password: {
        type: String,
        required: true,
    }
});

const userModel = mongoose.model(userCollection, userSchema);
export default userModel;