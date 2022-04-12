import { Router } from 'express';
import { signup, signin, listUser } from '../controllers/auth';

const router = Router();

router.get("/signup",  listUser);
router.post("/signup",  signup);
router.post('/signin', signin);
export default router