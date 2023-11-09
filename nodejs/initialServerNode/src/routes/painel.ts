import { Router, Request, Response } from "express";

let router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send(`Home do painel`)
}); 

router.get('/noticias', (req: Request, res: Response) => {
    res.send(`Lista de noticias cadastradas`)
}); 

export default router;