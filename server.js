const express = require('express');
const app = express();

app.get('/listadetareas', (req, res) => {
  const tasks = [
    { id: 1, description: 'Task 1', completed: false },
    { id: 2, description: 'Task 2', completed: true },
    { id: 3, description: 'Task 3', completed: false },
    { id: 4, description: 'Task 4', completed: false }
  ];
  res.json(tasks);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
