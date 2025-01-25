const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('API na Nuvem funcionando!');
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
