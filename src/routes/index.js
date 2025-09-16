import express from 'express';
import rotasDeProdutos from "./productsRoutes.js";

const routes = (app) => {

    app.use(express.json());

    app.route('/').get((req, res) => {
        res.status(200).send('Olá mundo!');
    });

    app.use(express.json(), rotasDeProdutos);

};

export default routes;
