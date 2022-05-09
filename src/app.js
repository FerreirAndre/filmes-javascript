import express from 'express';
import db from './config/db.js';
import routes from './routes/index.js'
db.on('error', () => {
    console.log.bind(console, "erro ao conectar ao bando de dados")
});
db.once('open', () => {
    console.log("banco de dados conectado com sucesso")
});

const app = express();
app.use(express.json());

routes(app)

export default app;