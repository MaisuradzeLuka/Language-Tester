import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: { type: String, require: true },
  name: { type: String, require: true },
  lastname: { type: String, require: true },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
