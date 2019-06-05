const TextAreaControl = async () => {
    const configurationReq = await fetch("/configuration");
    const configuration = await configurationReq.json();
 
    const translationUrl = `${configuration.file.client.req.translationUrl}${configuration.file.client.req.translatonUrlQuery}`;
    const body = document.querySelector("body");
    const documentToTranslate = document.querySelector("#documentToTranslate");
    const documentTranslation = document.querySelector("#documentTranslation");
    const loader = document.querySelector(".ms-loader");
    const overlay = document.querySelector(".ms-overlay");
    let documentToTranslateText;

    body.addEventListener("keyup", (e) => { handleEnterPress(e) });

    const handleEnterPress = async (e) => {
        documentToTranslateText = documentToTranslate.innerText;
        if (assertAreEqualStringIgnoreCase(e.key, configuration.codeUtils.keys.enter) && controlKeyEnabled(e)) {
            toggleLoading();
            const tranlatedDoc = await getTranslatedDocument();
            attachTranslation(tranlatedDoc);
            toggleLoading();
        }  
    };

    const toggleLoading = () => {
        documentToTranslate.blur();
        loader.classList.toggle("ms-opacity");
        overlay.classList.toggle("ms-blur");
    }

    const assertAreEqualStringIgnoreCase = (a, b) => a.match(new RegExp(b, "i")); 

    const controlKeyEnabled = (e) => e.ctrlKey;

    const getLangIds = () => {
        return {
            0: localStorage.getItem(configuration.langType.fromLang) || configuration.codeUtils.defaultLang.fromLangId,
            1: localStorage.getItem(configuration.langType.toLang) || configuration.codeUtils.defaultLang.toLangId,
        };
    };  

    /* 
        @getFullPath() 
        @1: passing document to translate
        @2: current native language
        @3: to translate lanugage 
    */

    const getFullPath = () => {
        return encodeURI(`${translationUrl}${documentToTranslateText}${configuration.file.client.req.translationFromLangQuery}${getLangIds()[0]}${configuration.file.client.req.translationToLangQuery}${getLangIds()[1]}`);;
    };

    const getTranslatedDocument = async () => {
        const fullUrl = getFullPath();
        const response = await fetch(fullUrl);
        const data = await response.json();
        return new Promise(resolve => resolve(data));
    };

    const isError = (data) => {
        return data === configuration.msg.dev.code.alreadyOpened ? true : false;
    };

    const attachTranslation = (data) => {
        if (isError(data)) {
            console.warn(configuration.msg.dev.warning.cantOpenAgainWhileTranslating);
            return;
        }
        documentTranslation.innerHTML = data;
    };
    

};

export default TextAreaControl;