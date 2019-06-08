const ServerControl = (() => {
    const translationControl = require(`./translation.js`).TranslationControl;
    const configuration = require("./public/config/config.json");
    const express = require("express");
    const app = express();
    const port = configuration.codeUtils.port;

    app.listen(port, () => console.log(`${configuration.msg.dev.log.serverStarted}`));
    app.use(express.static(`${__dirname}${configuration.folders.client.public}`));
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get(`${configuration.file.server.req.indexWWW}`, (req, res) => res.sendFile(`${__dirname}${configuration.file.server.res.indexWWW}`));
    app.get(`${configuration.file.client.req.listControl}`, (req, res) => res.sendFile(`${__dirname}${configuration.file.server.res.listControl}`));
    app.get(`${configuration.file.client.req.navigationUi}`, (req, res) => res.sendFile(`${__dirname}${configuration.file.server.res.navigationUi}`));
    app.get(`${configuration.file.client.req.textareaControl}`, (req, res) => res.sendFile(`${__dirname}${configuration.file.server.res.textareaControl}`));
    app.get(`${configuration.file.client.req.unloading}`, (req, res) => res.sendFile(`${__dirname}${configuration.file.server.res.unloading}`));
    app.get(`${configuration.file.client.req.getlist}`, async (req, res) => res.jsonp(await translationControl.COUNTRY_LIST_EN));
    app.get(`${configuration.file.client.req.translationUrl}${configuration.file.client.req.translationParams}`, async (req, res) => res.jsonp(await translationControl.sendTranslationBack(req.params.text, req.params.fromLang, req.params.toLang)));
    app.get(`${configuration.file.client.req.close}`, async (req, res) => res.jsonp(await translationControl.close()));
    app.get(`${configuration.file.client.req.configuration}`, async (req, res) => res.jsonp(configuration));
    app.get(`${configuration.file.client.req.configjs}`, async (req, res) => res.sendFile(`${__dirname}${configuration.file.server.res.configjs}`));
    app.get(`${configuration.file.client.req.langFunctions}`, async (req, res) => res.jsonp(await translationControl.langFunctions()));

    return this;
})();
module.exports.ServerControl = ServerControl;