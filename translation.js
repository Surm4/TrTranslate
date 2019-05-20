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
    const googleCharactersLimit = 50;
    const translatedDocumentArray = [];
    const options = {};
    let documentToTranslate = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor accumsan feugiat. Nulla at vestibulum mauris. Aliquam accumsan justo porta, consectetur libero sed, porttitor orci. Praesent mauris sem, gravida sit amet mi quis, varius rutrum velit. Morbi consequat quam nec euismod tempor. Donec augue est, molestie sed eros venenatis, consequat rutrum nibh. Sed felis velit, porta eu tellus eget, tristique condimentum dolor.
    Phasellus id ullamcorper orci. Curabitur mattis suscipit enim. Nulla sollicitudin vitae magna vitae sodales. Sed accumsan nec libero et elementum. Nulla semper ex efficitur metus gravida bibendum. Mauris ut dolor dui. Mauris tristique est justo, sed maximus nunc dapibus eu. Proin suscipit ligula volutpat, consectetur mi gravida, consequat metus. Phasellus at scelerisque ligula, a facilisis dui.
    Nam ut lacus vitae urna dictum tristique. Maecenas facilisis metus lacus, a efficitur mauris vulputate in. Morbi rutrum quam lacus, non pulvinar dolor condimentum quis. Morbi sed varius est. Aliquam sed blandit dolor, at dictum mauris. Nunc molestie, quam non imperdiet luctus, enim orci placerat nisi, eu pellentesque lectus felis vitae est. Proin luctus quam sit amet porta sagittis.
    Morbi at sollicitudin odio. Pellentesque leo dolor, condimentum in nunc sed, pulvinar elementum ligula. Aliquam aliquet lectus a eros placerat rhoncus. Pellentesque tempus enim non sollicitudin pulvinar. Pellentesque a consequat eros. Sed facilisis fringilla justo nec accumsan. Fusce tempus orci eget ex aliquet mattis. Ut vitae justo eleifend, feugiat enim eget, dictum purus. Etiam bibendum tincidunt lectus id tristique. Donec dapibus ligula vitae felis convallis aliquet. Curabitur dignissim purus sed tortor vehicula, ut sodales orci porttitor. Integer consequat odio metus, a porta ante porttitor quis. Integer faucibus nibh et vulputate ornare. Etiam ultricies neque lorem, quis ornare sapien posuere ut. Donec sed volutpat nisl.
    Cras at malesuada justo, et pellentesque ex. Fusce sed nisi pellentesque, blandit felis sollicitudin, sagittis libero. Mauris nec justo id dolor accumsan laoreet at non felis. Quisque accumsan in turpis id blandit. Aliquam scelerisque sapien eget lacus pretium congue. Aliquam aliquam convallis metus, sit amet pharetra felis vehicula at. Mauris semper lectus eu magna ullamcorper tincidunt. Maecenas purus ligula, dignissim et cursus eu, pellentesque ullamcorper ligula. Nunc viverra justo id odio ornare, at maximus urna sagittis. Praesent consectetur lectus sed purus gravida, ut lobortis eros faucibus.`;

    const sendTranslationBack = async (options) => {
        const {page, browser} = await prepareWorkshop();
        console.log(page, browser)
        const translationDone = await translateDocument(documentToTranslate, page, browser);
        console.log(translationDone);
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
        await browser.close();
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
            await page.waitFor(500); //typing timeout
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