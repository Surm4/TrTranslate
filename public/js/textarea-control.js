const TextAreaControl = () => {
    const translationUrl = "/translation?text=";
    const pressEventKey = "ENTER";
    const body = document.querySelector("body");
    const documentToTranslate = document.querySelector("#documentToTranslate");
    const documentTranslation = document.querySelector("#documentTranslation");
    let documentToTranslateText;

    
    body.addEventListener("keyup", (e) => { handleEnterPress(e) });

    const handleEnterPress = (e) => {
        documentToTranslateText = documentToTranslate.innerText;
        assertAreEqualStringIgnoreCase(e.key, pressEventKey) && controlKeyEnabled(e) ? getTranslatedDocument().then(data => attachTranslation(data)) : "";
    };

    const assertAreEqualStringIgnoreCase = (a, b) => a.match(new RegExp(b, "i")); 

    const controlKeyEnabled = (e) => e.ctrlKey;
    
    const getFullPath = () => encodeURI(`${translationUrl}${documentToTranslateText}`);

    const getTranslatedDocument = async () => {
        const fullUrl = getFullPath();
        const response = await fetch(fullUrl);
        const data = response.json();
        return data;
    };

    const attachTranslation = (data) => {
        documentTranslation.innerHTML = data;
    };
    

};

export default TextAreaControl;