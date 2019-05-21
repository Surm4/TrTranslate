const TranslationControl = (() => {
    const puppeteer = require('puppeteer');
    const googleAddress = 'https://translate.google.com';
    const shouldBeHeadless = false;
    const sourceDocumentElementOrigin = "#source";
    const translationDocumentElementOrigin = ".translation";
    let sourceDocumentElement = "#source";
    let translationDocumentElement = ".translation";
    const translationWaiterElement = ".translating";
    const translationWaiterElement2 = ".empty";
    const googleCharactersLimit = 5000;
    const translatedDocumentArray = [];
    const options = {};

    const sendTranslationBack = async (documentToTranslate) => {
        const {page, browser} = await prepareWorkshop();
        // console.log(page, browser)
        // console.log(documentToTranslate);
        const translationDone = await translateDocument(documentToTranslate, page, browser);
        // console.log(translationDone);
        return Promise.resolve(translationDone);
    }

    const prepareWorkshop = async () => {
        const browser = await puppeteer.launch({ headless: shouldBeHeadless });
        const page = await browser.newPage();
        await page.goto(googleAddress);
        await page.addScriptTag({path: `${__dirname}/public/js-attachments/selectors-validate.js`});
        return {
            page: page,
            browser: browser
        };
    }

    const translateDocument = async (documentToTranslate, page, browser) => {
        const documentToTranslateFragments = documentToTranslate.match(new RegExp(`.{1,${googleCharactersLimit}}`, "g"));
        await automate(documentToTranslateFragments, page);
        // await browser.close();
        return stringJoin(translatedDocumentArray);
    }

    const stringJoin = (translatedDocumentArray) => {
        return translatedDocumentArray.join(" ");
    }

    const automate = async (documentToTranslateFragments, page) => {
        for (let documentToTranslateFragment of documentToTranslateFragments) {
            /* Write into input */
            await page.evaluate((sourceDocumentElement, sourceDocumentElementOrigin, documentToTranslateFragment) => {
                if (sourceDocumentElement === sourceDocumentElementOrigin) {
                    sourceDocumentElement = document.querySelector(sourceDocumentElement);
                }
                sourceDocumentElement.value = documentToTranslateFragment;
            }, sourceDocumentElement, sourceDocumentElementOrigin, documentToTranslateFragment);
            /* Wait... */
            await page.waitForSelector(translationDocumentElement);
            await page.waitForSelector(translationDocumentElement, { hidden: true, visible: true });
            await page.waitForSelector(translationWaiterElement2, { hidden: true, visible: true });
            await page.waitFor(1000); //safe typing timeout to repair
            /* Get data */
            let translationOutput = await page.evaluate((translationDocumentElement, translationDocumentElementOrigin) => {
                if (translationDocumentElement === translationDocumentElementOrigin) {
                    translationDocumentElement = document.querySelector(translationDocumentElement);
                }
                return Promise.resolve(translationDocumentElement.innerText);
            }, translationDocumentElement, translationDocumentElementOrigin);
            translatedDocumentArray.push(translationOutput);
        }
        return Promise.resolve("OK");
    };

    return {
        sendTranslationBack: sendTranslationBack
    };
})();
module.exports.TranslationControl = TranslationControl;