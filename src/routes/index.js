import express from 'express';
import filmes from './filmesRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.send({titulo:'estudo em node'})
    })
    
    app.use(
        express.json(),
        filmes
    )
}

export default routes;