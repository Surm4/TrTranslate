const ServerControl = (() => {
    const translationControl = require(`./translation.js`).TranslationControl;
    const configuration = require("./public/config/config.json");
    const express = require("express");
    const app = express();
    const port = 80;

    app.listen(port, () => console.log(`${configuration.msg.dev.log.serverStarted}`));
    app.use(express.static(`${__dirname}${configuration.folders.client.public}`));

    app.get(`${configuration.file.server.req.indexWWW}`, (req, res) => res.sendFile(`${__dirname}${configuration.file.server.res.indexWWW}`));

    app.get(`${configuration.file.client.req.listControl}`, (req, res) => res.sendFile(`${__dirname}${configuration.file.server.res.listControl}`));
    app.get(`${configuration.file.client.req.navigationUi}`, (req, res) => res.sendFile(`${__dirname}${configuration.file.server.res.navigationUi}`));
    app.get(`${configuration.file.client.req.textareaControl}`, (req, res) => res.sendFile(`${__dirname}${configuration.file.server.res.textareaControl}`));
    app.get(`${configuration.file.client.req.unloading}`, (req, res) => res.sendFile(`${__dirname}${configuration.file.server.res.unloading}`));
    app.get(`${configuration.file.client.req.getlist}`, async (req, res) => res.jsonp(await translationControl.COUNTRY_LIST_EN));
    app.get(`${configuration.file.client.req.translationUrl}`, async (req, res) => res.jsonp(await translationControl.sendTranslationBack(req.query.text)));
    app.get(`${configuration.file.client.req.close}`, async (req, res) => res.jsonp(await translationControl.close()));

    return this;
})();
module.exports.ServerControl = ServerControl;