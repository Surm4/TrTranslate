const TextAreaControl = () => {
    const documentToTranslate = document.querySelector("#documentToTranslate");
    const documentTranslation = document.querySelector("#documentTranslation");
    documentToTranslate.addEventListener("keyup", _.debounce((e) => { handleTyping(e) }, 500));

   
    const initialTextareaHeight = documentToTranslate.scrollHeight;
    let oldTextareaHeight = 0;
    const handleTyping = (e) => {
        const currentTextareaHeight = e.target.scrollHeight;
        shouldChangeHeight(currentTextareaHeight);
    };

    const shouldChangeHeight = (currentTextareaHeight) => {
        const documentToTranslateIsNotEmpty = documentToTranslate.value.trim();
        console.log(currentTextareaHeight);
        if (documentToTranslateIsNotEmpty) {
            if (currentTextareaHeight !== oldTextareaHeight && currentTextareaHeight > initialTextareaHeight && currentTextareaHeight > oldTextareaHeight) { 
            } else {
               // i think instrad of calculating it will be changed to content editable div and it will be faster
            }
        } else {
            setNewHeight(initialTextareaHeight);
        }
    };

    const setNewHeight = (height) => {
        oldTextareaHeight = height;
        documentToTranslate.style.height = `${height}px`;
        documentTranslation.style.height =  `${height}px`;
    };

};

export default TextAreaControl;