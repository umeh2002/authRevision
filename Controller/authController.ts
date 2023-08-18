import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import authModel from "../Model/authModel";
import cloudinary from "../Config/cloudinary";

export const register = async (req: any, res: Response) => {
  try {
    const { fullName, password, email, confirmPassword,phoneNumber } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "invalid password",
      });
    }
    const { secure_url, public_id } = await cloudinary.uploader.upload(
      req.file?.path
    );
    const user = await authModel.create({
      fullName,
      password: hash,
      confirmPassword: hash,
      email,
      phoneNumber,
      avatar: secure_url,
      avatarUrl: public_id,
    });
return res.status(201).json({
    message:"user created successfully",
    data:user
})

  } catch (error) {
    return res.status(404).json({
      message: "error",
      data: error.message,
    });
  }
};

export const signIn = async (req:Request, res:Response) => {
  try {
const {email, password}=req.body
const user:any =await authModel.findOne({email})
const check:any =await bcrypt.compare(password, user?.password!)

if (check) {
    return res.status(201).json({
        message:"user signed in successfully",
        data:user._id
    })
} else {
    return res.status(403).json({
        message:"user not signed in"
    })
}

  } catch (error) {
    return res.status(404).json({
        message: "error",
        data: error.message,
      });
  }
};

export const findUsers= async(req:Request, res:Response)=>{
    try {
        const user =await authModel.find()

        return res.status(201).json({
            message:"user created successfully",
            data:user
        })
    } catch (error) {
        return res.status(404).json({
            message: "error",
            data: error.message,
          });
    }
}
