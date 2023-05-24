import { Router } from "express";
const router = Router();

router.get('/list', (req, res) => { res.json({'nombre':'sergio'}) });

export default router;
