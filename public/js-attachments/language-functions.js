const getLanguageFunctions = async () => {
    const langFunReq = await fetch("http://localhost/language-functions");
    const langFunRes = await langFunReq.json();
    return Promise.resolve({
        fromLangFunc : langFunRes.fromLangFunction,
        toLangFunc : langFunRes.toLangFunction
    });
};