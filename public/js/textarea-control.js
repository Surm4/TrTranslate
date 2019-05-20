const TextAreaControl = () => {
    const documentToTranslate = document.querySelector("#documentToTranslate");
    const documentTranslation = document.querySelector("#documentTranslation");
    documentToTranslate.addEventListener("keyup", _.debounce((e) => { handleTyping(e) }, 500));

    const initialTextareaHeight = documentToTranslate.scrollHeight;
    let oldTextareaHeight = 0;
    const handleTyping = (e) => {
        // add translating request
    };
};

export default TextAreaControl;