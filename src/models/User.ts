import mongoose, { Schema } from "mongoose";

interface User {
  name?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
}

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  createdAt: {
    type: "Date",
    default: Date.now,
  },
});

const User = mongoose.model<User>("User", UserSchema);

export { User };
