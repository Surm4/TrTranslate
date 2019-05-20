const selectorsValidate = (selector, selectorOrigin) => {
    if (selector === selectorOrigin) {
        selector = document.querySelector(selector);
    }
    return selector;
}
