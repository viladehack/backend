import { Router } from "express";
import { registerPost } from "../controllers/register";

const router = Router();

router.post('/', registerPost);

export default router;