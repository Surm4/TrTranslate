const NavigationControl = () => {
    const navSection = document.querySelectorAll(".ms-translation-container");
    const navItemsContainer = document.querySelector(".ms-nav");
    const navItems = [...document.querySelectorAll(".ms-nav .col-sm")];
    navItemsContainer.addEventListener("click", (e) => { handleNavClick(e); });
    
    const handleNavClick = (e) => {
        const el = e.target;
        const lvl = el.dataset.lvl;
        if (!el.classList.contains("ms-nav-active")) {
            el.classList.add("ms-nav-active");
            toggleSection(lvl);
            navItems.forEach(item => removeOtherItemsStyles(el, item));
            
        }
    };

    const toggleSection = (lvl) => {
        const keysToHide = Object.keys(navSection).filter(el => el != lvl);
        navSection[lvl].classList.remove("ms-display-none");
        keysToHide.forEach(el => navSection[el].classList.add("ms-display-none"));
    };

    const removeOtherItemsStyles = (el, item) => {
        if (el !== item) {
            item.classList.remove("ms-nav-active");   
        }  
    };
};

export default NavigationControl;