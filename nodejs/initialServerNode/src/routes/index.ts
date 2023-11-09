import { Router, Request, Response } from "express"; 

const router = Router();

router.get('/', (req: Request, res: Response) => {
    // utilizando o mustache
    res.render('home');
});

router.get('/noticia/:slug', (req: Request, res: Response) => {

    // como se fosse o @RequestParamns
    let slug = req.params.slug;
    res.send(`notícia: ${slug}`)
});

router.get('/voo/:origem-:destino', (req: Request, res: Response) => {

    let { origem, destino } = req.params;

    res.send(`Origem do voo ${origem.toUpperCase} e destino ${destino.toUpperCase}`);
    
});

export default router;