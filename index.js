import app from './src/app.js';

const port = 3000;

app.listen(port, () => {
    console.log(`aplicação iniciada, rodando em http://localhost:${port}`)
})