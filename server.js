import 'dotenv/config'; 
import app from "./src/app.js"; 

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor ouvindo na porta ${PORT}`);
});

//importando os pacotes do dotenv e app.js . Declaramos app pra ouvir na porta definida na constante definida!