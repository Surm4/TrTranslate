const Unloading = async () => {
    const configurationReq = await fetch("/configuration");
    const configuration = await configurationReq.json();

    window.onbeforeunload = async function () {
        const response = await fetch("/close");
        localStorage.setItem(configuration.langType.fromLang, configuration.codeUtils.defaultLang.fromLangId);
        localStorage.setItem(configuration.langType.toLang, configuration.codeUtils.defaultLang.toLangId);
    };
    return this;
};
export default Unloading;