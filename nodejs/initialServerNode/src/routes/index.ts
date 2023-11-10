import { Router, Request, Response } from "express"; 

const router = Router();

router.get('/', (req: Request, res: Response) => {
    // utilizando o mustache

    // declarando um objeto user
    let user = {
        username: 'Joao',
        age: 19
    };

    // variavel que define se vai ser mostrado ou nao a msg
    let welcome: boolean = false;

    // condicao
    if (user.age > 18) {
        welcome = true;
    }

    // passando para a home.mustache as variaveis
    res.render('pages/home', { 
        user,
        welcome,
        products: [
            {title: 'Produto X', price: 10},
            {title: 'Produto Y', price: 15},
            {title: 'Produto Z', price: 20}
        ],
        list: [
            'lalala',
            'blablabla',
            'yayayaya'
        ]
    });
});

router.get('/about/:slug', (req: Request, res: Response) => {

    // como se fosse o @RequestParamns
    let slug = req.params.slug;
    res.render('pages/about', {
        slug
    });
});

router.get('/contact/:nome-:sobrenome', (req: Request, res: Response) => {

    let { nome, sobrenome } = req.params;

    res.render('pages/contact', {
        nome,
        sobrenome
    });
    
});


router.get('/nome', (req: Request, res: Response) => {

    let nome: string = req.query.nome as string;

    res.render('pages/nome', {
        nome
    });

});


export default router;