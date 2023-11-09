import express, { Request, Response } from 'express';
import mainRoutes from './routes/index';
import painelRoutes from './routes/painel'
import path from 'path';


const server = express();

// deixa a pasta public como uma pasta de arquivos estaticos (sendo acessivel pelo localhost/static/css/style.css por exemplo)
server.use('/static', express.static(path.join(__dirname, '../public')));

server.use('/', mainRoutes);
// tudo que tiver dentro de painelRoutes irá ter o prefixo /painel
server.use('/painel', painelRoutes);

// página nao encontrada
server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada');
});

server.listen(3000);



