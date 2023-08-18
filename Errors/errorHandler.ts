import { NextFunction, Response } from "express";
import { HTTP, mainError } from "./mainError";

const myError = (res: Response, err: mainError) => {
  res.status(HTTP.BAD_REQUEST).json({
    name: err.name,
    message: err.message,
    success: err.success,
    status: err.status,
    stack: err.stack,
    err,
  });
};

export const errorHandler = (err: mainError, res: Response) => {
  myError(res, err);
};
