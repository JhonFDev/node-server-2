const express = require('express');
const app = express();

app.get('/listadetareas', (req, res) => {
  const tasks = [
 
  ];
  res.json(tasks);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
