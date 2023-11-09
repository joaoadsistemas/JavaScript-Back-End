import { Router, Request, Response } from "express";

let router = Router();

router.get('/', (req: Request, res: Response) => {
    // EXEMPLO DE HTML DINAMICO COM TEMPLATE ENGINE
    // pegar os produtos do banco de dados;
    // organizar as informações desse produto;
    // envia para o templete engine
    res.send(`Home do painel`)
}); 

router.get('/noticias', (req: Request, res: Response) => {
    res.send(`Lista de noticias cadastradas`)
}); 

export default router;