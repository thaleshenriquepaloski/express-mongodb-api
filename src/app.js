// importando os módulos do express
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Olá mundo!')
});

export default app;