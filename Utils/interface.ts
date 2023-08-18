import mongoose from "mongoose";

interface iAuth{
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    phoneNumber?:number;
    avatar?: string;
    avatarUrl?: string;
}

export interface iAuthData extends iAuth, mongoose.Document{}