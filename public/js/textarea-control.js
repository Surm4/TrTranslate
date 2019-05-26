const TextAreaControl = () => {
    const translationUrl = "/translation?text=";
    const pressEventKey = "ENTER";
    const body = document.querySelector("body");
    const documentToTranslate = document.querySelector("#documentToTranslate");
    const documentTranslation = document.querySelector("#documentTranslation");
    const loader = document.querySelector(".ms-loader");
    const overlay = document.querySelector(".ms-overlay");
    let documentToTranslateText;
    const errorCode = "MS_BROWSER_ALREADY_OPENED_ERROR";

    body.addEventListener("keyup", (e) => { handleEnterPress(e) });

    const handleEnterPress = async (e) => {
        documentToTranslateText = documentToTranslate.innerText;
        if (assertAreEqualStringIgnoreCase(e.key, pressEventKey) && controlKeyEnabled(e)) {
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
    
    const getFullPath = () => encodeURI(`${translationUrl}${documentToTranslateText}`);

    const getTranslatedDocument = async () => {
        const fullUrl = getFullPath();
        const response = await fetch(fullUrl);
        const data = await response.json();
        return new Promise(resolve => resolve(data));
    };

    const isError = (data) => {
        return data === errorCode ? true : false;
    };

    const attachTranslation = (data) => {
        if (isError(data)) {
            console.warn("textarea-control.js: Can't open again while translating")
            return;
        }
        documentTranslation.innerHTML = data;
    };
    

};

export default TextAreaControl;