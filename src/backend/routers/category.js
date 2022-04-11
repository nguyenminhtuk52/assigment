import { Router } from 'express';
import { createe, listt, readd, removee, updatee } from '../controllers/category';

const router = Router();

router.post('/category', createe);
router.get("/category/:id", readd);
router.get("/category",listt);
router.delete("/category/:id",removee);
router.put("/category/:id",updatee);

export default router;