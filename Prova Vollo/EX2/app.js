const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send('Avaliação');
});
const port = 5000;
app.listen(port, () => {
console.log(`App running on port ${port}`);
});