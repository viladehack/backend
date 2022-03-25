import { Router } from "express";
import { registerPost } from "../controllers/register";

const router = Router();

router.get('/', registerPost);

export default router;