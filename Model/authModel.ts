import mongoose from "mongoose";
import { iAuthData } from "../Utils/interface";

const authModel = new mongoose.Schema<iAuthData>(
  {
    fullName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
    },
    avatar: {
      type: String,
    },
    avatarUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<iAuthData>("auths", authModel);
