const NavigationControl = () => {
    const navItemsContainer = document.querySelector(".ms-nav");
    const navItems = [...document.querySelectorAll(".ms-nav .col-sm")];
    navItemsContainer.addEventListener("click", (e) => { handleNavClick(e); });
    
    const handleNavClick = (e) => {
        const el = e.target;
        if (!el.classList.contains("ms-nav-active")) {
            el.classList.add("ms-nav-active");
            navItems.forEach(item => removeOtherItemsStyles(el, item));
        }
    };

    const removeOtherItemsStyles = (el, item) => {
        if (el !== item) {
            item.classList.remove("ms-nav-active");   
        }  
    };
};

export default NavigationControl;