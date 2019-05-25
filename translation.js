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
    let translatedDocumentArray = [];
    let browserBusy = false;
    const options = {};
    const errorCodes = {
        alreadyOpened: "MS_BROWSER_ALREADY_OPENED_ERROR",
    };
    let browser, page;

    const sendTranslationBack = async (documentToTranslate) => {
        if (browserBusy) return errorCodes.alreadyOpened;

        browserBusy = true;
        translatedDocumentArray = [];
        await anyBrowserOpened();
        const translationDone = await translateDocument(documentToTranslate, page, browser);
        browserBusy = false;
        
        return translationDone;
    }

    const anyBrowserOpened = async () => {
        if (!browser) await prepareWorkshop();
    };

    const close = async () => {
         try {
            await browser.close();
             return "OKCLOSED";
         } catch {
             console.warn("Browser already closed");
             return "OK";
         }
    }

    const prepareWorkshop = async () => {
        browser = await puppeteer.launch({ headless: shouldBeHeadless });
        page = await browser.newPage();
        await page.goto(googleAddress);
        await page.addScriptTag({path: `${__dirname}/public/js-attachments/selectors-validate.js`});
        return {
            page: page,
            browser: browser
        };
    }

    const translateDocument = async (documentToTranslate, page) => {
        const documentToTranslateFragments = documentToTranslate.match(new RegExp(`.{1,${googleCharactersLimit}}`, "g"));
        await automate(documentToTranslateFragments, page);
        return stringJoin(translatedDocumentArray);
    }

    const stringJoin = (translatedDocumentArray) => {
        return translatedDocumentArray.join(" ");
    }

    const automate = async (documentToTranslateFragments, page) => {
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
        return Promise.resolve("OK");
    };

    return {
        sendTranslationBack: sendTranslationBack,
        close: close
    };
})();
module.exports.TranslationControl = TranslationControl;