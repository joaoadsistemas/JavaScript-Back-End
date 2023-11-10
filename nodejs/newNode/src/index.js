const express = require('express');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());


const projects = [];

function logRoutes(request, response, next) {
    const { method, url } = request;
    const route = `[${method.toUpperCase()}] ${url}`;
    console.log(route);
    return next();
}

app.use(logRoutes);


app.get('/projects', (request, response) => {

    response.json(projects);

});


app.post('/projects', (request, response) => {
    const {name, owner} = request.body;
    const project = {
        id: uuidv4(),
        name,
        owner
    }
    projects.push(project);

    response.status(201).json(project);
});

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;
    const { name, owner } = request.body;

    const projectIndex = projects.findIndex(p => p.id === id);
    
    if(projectIndex < 0) {
        response.status(404).json({
            error: "Project not found"
        })
    }

    if (!name || !owner) {
        response.status(400).json({
            error: "Name and owner are required"
        })
    }

    const project = {
        id,
        name,
        owner
    }

    projects[projectIndex] = project;

    response.json(project);
});

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;
    const indexProject = projects.findIndex(p => p.id === id);
    projects.splice(indexProject, 1);

    if(projectIndex < 0) {
        response.status(404).json({
            error: "Project not found"
        })
    }

    response.status(200).json({
        msg: 'Object removed'
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000')
});

