import { Router } from "express";

import { login } from "../controllers/auth";

const router: any = Router();

router.post('/', login);


export default router;