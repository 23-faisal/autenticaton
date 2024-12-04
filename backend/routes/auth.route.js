// routes/auth.route.js
import { Router } from "express";
import { logOut, signIn, signUp } from "../controllers/auth.controller.js";

const router = Router();

router.post("/signup", signUp);

router.post("/signin", signIn);

router.post("/logout", logOut);

export default router;
