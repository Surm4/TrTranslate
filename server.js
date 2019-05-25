const ServerControl = (() => {
    const translationControl = require(`./translation.js`).TranslationControl;
    const express = require("express");
    const app = express();
    const port = 80;

    app.listen(port, () => console.log(`Server started`));
    app.use(express.static(`${__dirname}/public`));

    app.get('/', (req, res) => res.sendFile(`${__dirname}/public/www/index.html`));

    app.get('/list-control', (req, res) => res.sendFile(`${__dirname}/public/js/list-control.js`));
    app.get('/navigation-ui', (req, res) => res.sendFile(`${__dirname}/public/js/navigation-ui.js`));
    app.get('/textarea-control', (req, res) => res.sendFile(`${__dirname}/public/js/textarea-control.js`));
    app.get('/unloading', (req, res) => res.sendFile(`${__dirname}/public/js/unloading.js`));
    app.get('/translation', async (req, res) => res.jsonp(await translationControl.sendTranslationBack(req.query.text)));
    app.get('/close', async (req, res) => res.jsonp(await translationControl.close()));

    return this;
})();
module.exports.ServerControl = ServerControl;