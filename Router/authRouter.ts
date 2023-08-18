import express, { Router } from "express";
import { findUsers, register, signIn } from "../Controller/authController";

const router = Router();
router.route("/sign-up").post(register);
router.route("/sign-in").post(signIn);
router.route("/sign-up").get(findUsers);

export default router;
