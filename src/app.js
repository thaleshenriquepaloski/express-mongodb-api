// importando os módulos do express
import express from 'express';
import dataBaseConnection from './config/dbConnection.js';
import routes from './routes/index.js';

const conexao = await dataBaseConnection();

conexao.on('error', (erro) => {
    console.log('Erro de conexão', erro);
});

conexao.once('open', () => {
    console.log('Conexão com banco de dados realizada com sucesso!');
})

const app = express();
routes(app);

export default app;