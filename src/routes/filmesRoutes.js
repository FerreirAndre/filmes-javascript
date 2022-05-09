import express, { Router } from 'express';
import FilmesController from '../controllers/filmesControllers.js';

const router = express.Router();

router
    .get('/filmes', FilmesController.mostrarFilmes)
    .get('/filmes/:id', FilmesController.mostrarUmFilme)
    .post('/filmes', FilmesController.inserirFilme)
    .put('/filmes/:id', FilmesController.atualizarFilme)
    .delete('filmes/:id', FilmesController.deletarUm)

export default router;