const ListControl = async function() {
    const COUNTRY_LIST_EN_req = await fetch("/getlist");
    const COUNTRY_LIST_EN = await COUNTRY_LIST_EN_req.json();

    document.querySelector(".ms-language-native").addEventListener("change", (e) => { handleLanguageChange(e.target.value, "from_lang") });
    document.querySelector(".ms-language-translation").addEventListener("change", (e) => { handleLanguageChange(e.target.value, "to_lang") });

    const handleLanguageChange = (lang, langGoal) => {
        const langIndex = COUNTRY_LIST_EN.findIndex(el => el === lang);
        localStorage.setItem(langGoal, langIndex);
    };

    const languageSelectors = [document.querySelector(".ms-language-native"), document.querySelector(".ms-language-translation")]; 
    const languageFragments = [document.createDocumentFragment(), document.createDocumentFragment()];
    const languageCount = languageSelectors.length;

    (() => {
        for (let country of COUNTRY_LIST_EN) {
            languageFragments.forEach(languageFragment => { languageFragment.appendChild(new Option(country, country)) });
        }

        for (let i = 0; i < languageCount; i++) {
            languageSelectors[i].append(languageFragments[i]);
        }
    })();

    return this;
};

export default ListControl;