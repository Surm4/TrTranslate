const TranslationControl = (() => {
    const changeSourceLanguageFunctions = `_e(event, 'changeLanguage+0', 'sl_list_af')|_e(event, 'changeLanguage+0', 'sl_list_sq')|_e(event, 'changeLanguage+0', 'sl_list_am')|_e(event, 'changeLanguage+0', 'sl_list_en')|_e(event, 'changeLanguage+0', 'sl_list_ar')|_e(event, 'changeLanguage+0', 'sl_list_az')|_e(event, 'changeLanguage+0', 'sl_list_eu')|_e(event, 'changeLanguage+0', 'sl_list_bn')|_e(event, 'changeLanguage+0', 'sl_list_be')|_e(event, 'changeLanguage+0', 'sl_list_my')|_e(event, 'changeLanguage+0', 'sl_list_bs')|_e(event, 'changeLanguage+0', 'sl_list_bg')|_e(event, 'changeLanguage+0', 'sl_list_ceb')|_e(event, 'changeLanguage+0', 'sl_list_zh-CN')|_e(event, 'changeLanguage+0', 'sl_list_hr')|_e(event, 'changeLanguage+0', 'sl_list_cs')|_e(event, 'changeLanguage+0', 'sl_list_ny')|_e(event, 'changeLanguage+0', 'sl_list_da')|_e(event, 'changeLanguage+0', 'sl_list_eo')|_e(event, 'changeLanguage+0', 'sl_list_et')|_e(event, 'changeLanguage+0', 'sl_list_tl')|_e(event, 'changeLanguage+0', 'sl_list_fi')|_e(event, 'changeLanguage+0', 'sl_list_fr')|_e(event, 'changeLanguage+0', 'sl_list_fy')|_e(event, 'changeLanguage+0', 'sl_list_gl')|_e(event, 'changeLanguage+0', 'sl_list_el')|_e(event, 'changeLanguage+0', 'sl_list_ka')|_e(event, 'changeLanguage+0', 'sl_list_gu')|_e(event, 'changeLanguage+0', 'sl_list_ha')|_e(event, 'changeLanguage+0', 'sl_list_haw')|_e(event, 'changeLanguage+0', 'sl_list_iw')|_e(event, 'changeLanguage+0', 'sl_list_hi')|_e(event, 'changeLanguage+0', 'sl_list_es')|_e(event, 'changeLanguage+0', 'sl_list_hmn')|_e(event, 'changeLanguage+0', 'sl_list_ig')|_e(event, 'changeLanguage+0', 'sl_list_id')|_e(event, 'changeLanguage+0', 'sl_list_ga')|_e(event, 'changeLanguage+0', 'sl_list_is')|_e(event, 'changeLanguage+0', 'sl_list_ja')|_e(event, 'changeLanguage+0', 'sl_list_jw')|_e(event, 'changeLanguage+0', 'sl_list_yi')|_e(event, 'changeLanguage+0', 'sl_list_yo')|_e(event, 'changeLanguage+0', 'sl_list_kn')|_e(event, 'changeLanguage+0', 'sl_list_ca')|_e(event, 'changeLanguage+0', 'sl_list_kk')|_e(event, 'changeLanguage+0', 'sl_list_km')|_e(event, 'changeLanguage+0', 'sl_list_ky')|_e(event, 'changeLanguage+0', 'sl_list_ko')|_e(event, 'changeLanguage+0', 'sl_list_co')|_e(event, 'changeLanguage+0', 'sl_list_ht')|_e(event, 'changeLanguage+0', 'sl_list_ku')|_e(event, 'changeLanguage+0', 'sl_list_lo')|_e(event, 'changeLanguage+0', 'sl_list_lt')|_e(event, 'changeLanguage+0', 'sl_list_lb')|_e(event, 'changeLanguage+0', 'sl_list_la')|_e(event, 'changeLanguage+0', 'sl_list_lv')|_e(event, 'changeLanguage+0', 'sl_list_mk')|_e(event, 'changeLanguage+0', 'sl_list_ml')|_e(event, 'changeLanguage+0', 'sl_list_ms')|_e(event, 'changeLanguage+0', 'sl_list_mg')|_e(event, 'changeLanguage+0', 'sl_list_mt')|_e(event, 'changeLanguage+0', 'sl_list_mi')|_e(event, 'changeLanguage+0', 'sl_list_mr')|_e(event, 'changeLanguage+0', 'sl_list_mn')|_e(event, 'changeLanguage+0', 'sl_list_ne')|_e(event, 'changeLanguage+0', 'sl_list_nl')|_e(event, 'changeLanguage+0', 'sl_list_de')|_e(event, 'changeLanguage+0', 'sl_list_no')|_e(event, 'changeLanguage+0', 'sl_list_hy')|_e(event, 'changeLanguage+0', 'sl_list_ps')|_e(event, 'changeLanguage+0', 'sl_list_pa')|_e(event, 'changeLanguage+0', 'sl_list_fa')|_e(event, 'changeLanguage+0', 'sl_list_pl')|_e(event, 'changeLanguage+0', 'sl_list_pt')|_e(event, 'changeLanguage+0', 'sl_list_ru')|_e(event, 'changeLanguage+0', 'sl_list_ro')|_e(event, 'changeLanguage+0', 'sl_list_sm')|_e(event, 'changeLanguage+0', 'sl_list_sr')|_e(event, 'changeLanguage+0', 'sl_list_sn')|_e(event, 'changeLanguage+0', 'sl_list_sd')|_e(event, 'changeLanguage+0', 'sl_list_sk')|_e(event, 'changeLanguage+0', 'sl_list_sl')|_e(event, 'changeLanguage+0', 'sl_list_so')|_e(event, 'changeLanguage+0', 'sl_list_st')|_e(event, 'changeLanguage+0', 'sl_list_sw')|_e(event, 'changeLanguage+0', 'sl_list_su')|_e(event, 'changeLanguage+0', 'sl_list_si')|_e(event, 'changeLanguage+0', 'sl_list_gd')|_e(event, 'changeLanguage+0', 'sl_list_sv')|_e(event, 'changeLanguage+0', 'sl_list_tg')|_e(event, 'changeLanguage+0', 'sl_list_th')|_e(event, 'changeLanguage+0', 'sl_list_ta')|_e(event, 'changeLanguage+0', 'sl_list_te')|_e(event, 'changeLanguage+0', 'sl_list_tr')|_e(event, 'changeLanguage+0', 'sl_list_uk')|_e(event, 'changeLanguage+0', 'sl_list_ur')|_e(event, 'changeLanguage+0', 'sl_list_uz')|_e(event, 'changeLanguage+0', 'sl_list_cy')|_e(event, 'changeLanguage+0', 'sl_list_hu')|_e(event, 'changeLanguage+0', 'sl_list_vi')|_e(event, 'changeLanguage+0', 'sl_list_it')|_e(event, 'changeLanguage+0', 'sl_list_xh')|_e(event, 'changeLanguage+0', 'sl_list_zu')`
        .split("|");
    const changeTranslationLanguageFucntions = `_e(event, 'changeLanguage+0', 'tl_list_af')|_e(event, 'changeLanguage+0', 'tl_list_am')|_e(event, 'changeLanguage+0', 'tl_list_en')|_e(event, 'changeLanguage+0', 'tl_list_ar')|_e(event, 'changeLanguage+0', 'tl_list_az')|_e(event, 'changeLanguage+0', 'tl_list_eu')|_e(event, 'changeLanguage+0', 'tl_list_bn')|_e(event, 'changeLanguage+0', 'tl_list_be')|_e(event, 'changeLanguage+0', 'tl_list_my')|_e(event, 'changeLanguage+0', 'tl_list_bs')|_e(event, 'changeLanguage+0', 'tl_list_bg')|_e(event, 'changeLanguage+0', 'tl_list_ceb')|_e(event, 'changeLanguage+0', 'tl_list_zh-TW')|_e(event, 'changeLanguage+0', 'tl_list_zh-CN')|_e(event, 'changeLanguage+0', 'tl_list_hr')|_e(event, 'changeLanguage+0', 'tl_list_cs')|_e(event, 'changeLanguage+0', 'tl_list_ny')|_e(event, 'changeLanguage+0', 'tl_list_da')|_e(event, 'changeLanguage+0', 'tl_list_eo')|_e(event, 'changeLanguage+0', 'tl_list_et')|_e(event, 'changeLanguage+0', 'tl_list_tl')|_e(event, 'changeLanguage+0', 'tl_list_fi')|_e(event, 'changeLanguage+0', 'tl_list_fr')|_e(event, 'changeLanguage+0', 'tl_list_fy')|_e(event, 'changeLanguage+0', 'tl_list_gl')|_e(event, 'changeLanguage+0', 'tl_list_el')|_e(event, 'changeLanguage+0', 'tl_list_ka')|_e(event, 'changeLanguage+0', 'tl_list_gu')|_e(event, 'changeLanguage+0', 'tl_list_ha')|_e(event, 'changeLanguage+0', 'tl_list_haw')|_e(event, 'changeLanguage+0', 'tl_list_iw')|_e(event, 'changeLanguage+0', 'tl_list_hi')|_e(event, 'changeLanguage+0', 'tl_list_es')|_e(event, 'changeLanguage+0', 'tl_list_hmn')|_e(event, 'changeLanguage+0', 'tl_list_ig')|_e(event, 'changeLanguage+0', 'tl_list_id')|_e(event, 'changeLanguage+0', 'tl_list_ga')|_e(event, 'changeLanguage+0', 'tl_list_is')|_e(event, 'changeLanguage+0', 'tl_list_ja')|_e(event, 'changeLanguage+0', 'tl_list_jw')|_e(event, 'changeLanguage+0', 'tl_list_yi')|_e(event, 'changeLanguage+0', 'tl_list_yo')|_e(event, 'changeLanguage+0', 'tl_list_kn')|_e(event, 'changeLanguage+0', 'tl_list_ca')|_e(event, 'changeLanguage+0', 'tl_list_kk')|_e(event, 'changeLanguage+0', 'tl_list_km')|_e(event, 'changeLanguage+0', 'tl_list_ky')|_e(event, 'changeLanguage+0', 'tl_list_ko')|_e(event, 'changeLanguage+0', 'tl_list_co')|_e(event, 'changeLanguage+0', 'tl_list_ht')|_e(event, 'changeLanguage+0', 'tl_list_ku')|_e(event, 'changeLanguage+0', 'tl_list_lo')|_e(event, 'changeLanguage+0', 'tl_list_lt')|_e(event, 'changeLanguage+0', 'tl_list_lb')|_e(event, 'changeLanguage+0', 'tl_list_la')|_e(event, 'changeLanguage+0', 'tl_list_lv')|_e(event, 'changeLanguage+0', 'tl_list_mk')|_e(event, 'changeLanguage+0', 'tl_list_ml')|_e(event, 'changeLanguage+0', 'tl_list_ms')|_e(event, 'changeLanguage+0', 'tl_list_mg')|_e(event, 'changeLanguage+0', 'tl_list_mt')|_e(event, 'changeLanguage+0', 'tl_list_mi')|_e(event, 'changeLanguage+0', 'tl_list_mr')|_e(event, 'changeLanguage+0', 'tl_list_mn')|_e(event, 'changeLanguage+0', 'tl_list_ne')|_e(event, 'changeLanguage+0', 'tl_list_nl')|_e(event, 'changeLanguage+0', 'tl_list_de')|_e(event, 'changeLanguage+0', 'tl_list_no')|_e(event, 'changeLanguage+0', 'tl_list_hy')|_e(event, 'changeLanguage+0', 'tl_list_ps')|_e(event, 'changeLanguage+0', 'tl_list_pa')|_e(event, 'changeLanguage+0', 'tl_list_fa')|_e(event, 'changeLanguage+0', 'tl_list_pl')|_e(event, 'changeLanguage+0', 'tl_list_pt')|_e(event, 'changeLanguage+0', 'tl_list_ru')|_e(event, 'changeLanguage+0', 'tl_list_ro')|_e(event, 'changeLanguage+0', 'tl_list_sm')|_e(event, 'changeLanguage+0', 'tl_list_sr')|_e(event, 'changeLanguage+0', 'tl_list_sn')|_e(event, 'changeLanguage+0', 'tl_list_sd')|_e(event, 'changeLanguage+0', 'tl_list_sk')|_e(event, 'changeLanguage+0', 'tl_list_sl')|_e(event, 'changeLanguage+0', 'tl_list_so')|_e(event, 'changeLanguage+0', 'tl_list_st')|_e(event, 'changeLanguage+0', 'tl_list_sw')|_e(event, 'changeLanguage+0', 'tl_list_su')|_e(event, 'changeLanguage+0', 'tl_list_si')|_e(event, 'changeLanguage+0', 'tl_list_gd')|_e(event, 'changeLanguage+0', 'tl_list_sv')|_e(event, 'changeLanguage+0', 'tl_list_tg')|_e(event, 'changeLanguage+0', 'tl_list_th')|_e(event, 'changeLanguage+0', 'tl_list_ta')|_e(event, 'changeLanguage+0', 'tl_list_te')|_e(event, 'changeLanguage+0', 'tl_list_tr')|_e(event, 'changeLanguage+0', 'tl_list_uk')|_e(event, 'changeLanguage+0', 'tl_list_ur')|_e(event, 'changeLanguage+0', 'tl_list_uz')|_e(event, 'changeLanguage+0', 'tl_list_cy')|_e(event, 'changeLanguage+0', 'tl_list_hu')|_e(event, 'changeLanguage+0', 'tl_list_vi')|_e(event, 'changeLanguage+0', 'tl_list_it')|_e(event, 'changeLanguage+0', 'tl_list_xh')|_e(event, 'changeLanguage+0', 'tl_list_zu')`
        .split("|");
    const COUNTRY_LIST_PL = `afrikaans,albański,amharski,angielski,arabski,azerski,baskijski,bengalski,białoruski,birmański,bośniacki,bułgarski,cebuański,chiński,chorwacki,czeski,cziczewa,duński,esperanto,estoński,filipiński,fiński,francuski,fryzyjski,galicyjski,grecki,gruziński,gudżarati,hausa,hawajski,hebrajski,hindi,hiszpański,hmong,igbo,indonezyjski,irlandzki,islandzki,japoński,jawajski,jidysz,joruba,kannada,kataloński,kazachski,khmerski,kirgiski,koreański,korsykański,kreolski (Haiti),kurdyjski,laotański,litewski,luksemburski,łaciński,łotewski,macedoński,malajalam,malajski,malgaski,maltański,maori,marathi,mongolski,nepalski,niderlandzki,niemiecki,norweski,ormiański,paszto,pendżabski,perski,polski,portugalski,rosyjski,rumuński,samoański,serbski,shona,sindhi,słowacki,słoweński,somalijski,sotho,suahili,sundajski,syngaleski,szkocki gaelicki,szwedzki,tadżycki,tajski,tamilski,telugu,turecki,ukraiński,urdu,uzbecki,walijski,węgierski,wietnamski,włoski,xhosa,zulu`
        .split(",");
    const COUNTRY_LIST_EN = `Afrikaans,Albanian,Amharic,Arabic,Armenian,Azerbaijani,Basque,Belarusian,Bengali,Bosnian,Bulgarian,Catalan,Cebuano,Chichewa,Chinese,Corsican,Croatian,Czech,Danish,Dutch,English,Esperanto,Estonian,Filipino,Finnish,French,Frisian,Galician,Georgian,German,Greek,Gujarati,Haitian Creole,Hausa,Hawaiian,Hebrew,Hindi,Hmong,Hungarian,Icelandic,Igbo,Indonesian,Irish,Italian,Japanese,Javanese,Kannada,Kazakh,Khmer,Korean,Kurdish (Kurmanji),Kyrgyz,Lao,Latin,Latvian,Lithuanian,Luxembourgish,Macedonian,Malagasy,Malay,Malayalam,Maltese,Maori,Marathi,Mongolian,Myanmar (Burmese),Nepali,Norwegian,Pashto,Persian,Polish,Portuguese,Punjabi,Romanian,Russian,Samoan,Scots Gaelic,Serbian,Sesotho,Shona,Sindhi,Sinhala,Slovak,Slovenian,Somali,Spanish,Sundanese,Swahili,Swedish,Tajik,Tamil,Telugu,Thai,Turkish,Ukrainian,Urdu,Uzbek,Vietnamese,Welsh,Xhosa,Yiddish,Yoruba,Zulu`
        .split(",");

    const errorCodes = {
        alreadyOpened: "MS_BROWSER_ALREADY_OPENED_ERROR",
    };
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
        close: close,
        COUNTRY_LIST_EN: COUNTRY_LIST_EN
    };
})();
module.exports.TranslationControl = TranslationControl;