const express = require('express');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());


const projects = [];


app.get('/projects', (request, response) => {
    // TODOS OS DADOS ENVIADOS NA URL(QUERYPARAMS OU ROUTEPARAMS) OU BODY(BODYPARAMS) CAI NA REQUEST
    // http://localhost:3000/projects/?title=Node&owner=Joao
    const query = request.query;
    console.log(query)
    console.log(query.title);
    

    response.json([
        'Projeto 1',
        'Projeto 2'
    ]);
});


app.post('/projects', (request, response) => {
    const body = request.body;
    console.log(body);



    response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.put('/projects/:id/:projectId', (request, response) => {

    const params = request.params;
    console.log(params);

    response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.delete('/projects/:id', (request, response) => {
    response.json([
        'Projeto 4',
        'Projeto 3'
    ]);
});

app.listen(3000, () => {
    console.log('Server started on port 3000')
});

