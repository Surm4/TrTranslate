const express = require('express');
const app = express();
const port = 80;

app.listen(port, () => console.log(`Server has been started!`));
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => res.sendFile(`${__dirname}/public/www/index.html`));

app.get('/list-control', (req, res) => res.sendFile(`${__dirname}/public/js/list-control.js`));
app.get('/navigation-ui', (req, res) => res.sendFile(`${__dirname}/public/js/navigation-ui.js`));
app.get('/textarea-control', (req, res) => res.sendFile(`${__dirname}/public/js/textarea-control.js`));


