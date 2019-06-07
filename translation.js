const TranslationControl = (() => {
    const configuration = require("./public/config/config.json");
    const puppeteer = require('puppeteer');
    
    //Arrays of languages/languages functions
    const changeSourceLanguageFunctions = configuration.codeUtils.fromLangFunctions.split("|");
    const changeTranslationLanguageFunctions =  configuration.codeUtils.toLangFunctions.split("|");
    const COUNTRY_LIST_PL = configuration.countryList.pl.split(",");
    const COUNTRY_LIST_EN = configuration.countryList.en.split(",");

    const shouldBeHeadless = false;
    const sourceDocumentElementOrigin = "#source";
    const translationDocumentElementOrigin = ".translation";
    let sourceDocumentElement = "#source";
    let translationDocumentElement = ".translation";
    const translationWaiterElement = ".translating";
    const translationWaiterElement2 = ".empty";
    const moreFromLangButton = ".sl-more";
    const fromLangListBlock = ".language-list-unfiltered-langs-sl_list";
    const moreToLangButton = ".tl-more";
    const toLangListBlock = ".language-list-unfiltered-langs-tl_list";
    const googleCharactersLimit = 5000;
    let translatedDocumentArray = [];
    let browserBusy = false;
    const options = {};

    let browser, page;

    const sendTranslationBack = async (documentToTranslate, ...langs) => {
        if (browserBusy) return configuration.msg.dev.code.alreadyOpened;
        const fromLangFunction = changeSourceLanguageFunctions[langs[0]];
        const toLangFunction = changeTranslationLanguageFunctions[langs[1]];
        browserBusy = true;
        translatedDocumentArray = []; //clears latest translation
        await anyBrowserOpened();
        const translationDone = await translateDocument(documentToTranslate, page, browser, fromLangFunction, toLangFunction);
        browserBusy = false;
        
        return translationDone;
    };

    const anyBrowserOpened = async () => {
        if (!browser) await prepareWorkshop();
    };

    const close = async () => {
         try {
            await browser.close();
             return configuration.msg.dev.code.OK_STATUS;
         } catch {
             console.warn(configuration.msg.dev.warning.alreadyClosed);
             return configuration.msg.dev.code.OK_STATUS;
         }
    };

    const prepareWorkshop = async () => {
        browser = await puppeteer.launch({ headless: shouldBeHeadless });
        page = await browser.newPage();
        await page.goto(configuration.codeUtils.googletranslateAddress);
        await page.addScriptTag({path: `${__dirname}${configuration.folders.server.validateSelectorsAttachments}`});
        return {
            page: page,
            browser: browser
        };
    };

    const translateDocument = async (documentToTranslate, page, fromLangFunction, toLangFunction) => {
        const documentToTranslateFragments = documentToTranslate.match(new RegExp(`.{1,${googleCharactersLimit}}`, "g"));
        await automate(documentToTranslateFragments, page, fromLangFunction, toLangFunction);
        return stringJoin(translatedDocumentArray);
    };

    const stringJoin = (translatedDocumentArray) => {
        return translatedDocumentArray.join(" ");
    };

    const setLanguages = async (page) => {
        await page.waitForSelector(moreFromLangButton);
        await page.click(moreFromLangButton);
        await page.waitFor(fromLangListBlock);
        await page.evaluate((fromLangFunction) => eval(fromLangFunction)); // TODO: !IMPORTANT THERE SHOULD BE functions embeded IN PREPARE WORKSHOP
        await page.click(moreToLangButton);
        await page.waitFor(toLangListBlock);
        await page.evaluate((t) => {eval(toLangFunction)});
        return configuration.msg.dev.code.OK_STATUS;
    };

    const automate = async (documentToTranslateFragments, page, fromLangFunction, toLangFunction) => {
        await setLanguages(page);
        for (let documentToTranslateFragment of documentToTranslateFragments) {
            /* Write into input */
            await page.evaluate((sourceDocumentElement, sourceDocumentElementOrigin, documentToTranslateFragment) => {
                sourceDocumentElement = selectorsValidate(sourceDocumentElement, sourceDocumentElementOrigin);
                sourceDocumentElement.value = documentToTranslateFragment;
            }, sourceDocumentElement, sourceDocumentElementOrigin, documentToTranslateFragment);
            /* Wait... */
            await page.waitForSelector(translationDocumentElement);
            await page.waitForSelector(translationDocumentElement, { hidden: true, visible: true });
            await page.waitForSelector(translationWaiterElement2, { hidden: true, visible: true });
            await page.waitFor(1000); //safe typing timeout to repair
            /* Get data */
            let translationOutput = await page.evaluate((translationDocumentElement, translationDocumentElementOrigin) => {
                translationDocumentElement = selectorsValidate(translationDocumentElement, translationDocumentElementOrigin);
                return Promise.resolve(translationDocumentElement.innerText);
            }, translationDocumentElement, translationDocumentElementOrigin);
            translatedDocumentArray.push(translationOutput);
        }
        return Promise.resolve(configuration.msg.dev.code.OK_STATUS);
    };

    return {
        sendTranslationBack: sendTranslationBack,
        close: close,
        COUNTRY_LIST_EN: COUNTRY_LIST_EN
    };
})();
module.exports.TranslationControl = TranslationControl;