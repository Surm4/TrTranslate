const ListControl = (() => {
    const COUNTRY_LIST_PL = `afrikaans,albański,amharski,angielski,arabski,azerski,baskijski,bengalski,białoruski,birmański,bośniacki,bułgarski,cebuański,chiński,chorwacki,czeski,cziczewa,duński,esperanto,estoński,filipiński,fiński,francuski,fryzyjski,galicyjski,grecki,gruziński,gudżarati,hausa,hawajski,hebrajski,hindi,hiszpański,hmong,igbo,indonezyjski,irlandzki,islandzki,japoński,jawajski,jidysz,joruba,kannada,kataloński,kazachski,khmerski,kirgiski,koreański,korsykański,kreolski (Haiti),kurdyjski,laotański,litewski,luksemburski,łaciński,łotewski,macedoński,malajalam,malajski,malgaski,maltański,maori,marathi,mongolski,nepalski,niderlandzki,niemiecki,norweski,ormiański,paszto,pendżabski,perski,polski,portugalski,rosyjski,rumuński,samoański,serbski,shona,sindhi,słowacki,słoweński,somalijski,sotho,suahili,sundajski,syngaleski,szkocki gaelicki,szwedzki,tadżycki,tajski,tamilski,telugu,turecki,ukraiński,urdu,uzbecki,walijski,węgierski,wietnamski,włoski,xhosa,zulu`.split(",");
    const COUNTRY_LIST_EN = `Afrikaans,Albanian,Amharic,Arabic,Armenian,Azerbaijani,Basque,Belarusian,Bengali,Bosnian,Bulgarian,Catalan,Cebuano,Chichewa,Chinese,Corsican,Croatian,Czech,Danish,Dutch,English,Esperanto,Estonian,Filipino,Finnish,French,Frisian,Galician,Georgian,German,Greek,Gujarati,Haitian Creole,Hausa,Hawaiian,Hebrew,Hindi,Hmong,Hungarian,Icelandic,Igbo,Indonesian,Irish,Italian,Japanese,Javanese,Kannada,Kazakh,Khmer,Korean,Kurdish (Kurmanji),Kyrgyz,Lao,Latin,Latvian,Lithuanian,Luxembourgish,Macedonian,Malagasy,Malay,Malayalam,Maltese,Maori,Marathi,Mongolian,Myanmar (Burmese),Nepali,Norwegian,Pashto,Persian,Polish,Portuguese,Punjabi,Romanian,Russian,Samoan,Scots Gaelic,Serbian,Sesotho,Shona,Sindhi,Sinhala,Slovak,Slovenian,Somali,Spanish,Sundanese,Swahili,Swedish,Tajik,Tamil,Telugu,Thai,Turkish,Ukrainian,Urdu,Uzbek,Vietnamese,Welsh,Xhosa,Yiddish,Yoruba,Zulu`.split(",");

    const languageSelectors = [document.querySelector(".ms-language-native"), document.querySelector(".ms-language-translation")]; 
    const languageFragments = [document.createDocumentFragment(), document.createDocumentFragment()];
    const languageCount = languageSelectors.length;

    const listInit = () => {
        for (let country of COUNTRY_LIST_EN) {
            languageFragments.forEach(languageFragment => { languageFragment.appendChild(new Option(country)) });
        }

        for (let i = 0; i < languageCount; i++) {
            languageSelectors[i].append(languageFragments[i]);
        }
    }

    return listInit;
})();
export default ListControl;