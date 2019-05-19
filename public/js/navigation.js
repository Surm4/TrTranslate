const navItems = document.querySelector(".ms-nav");
navItems.addEventListener("click", (e) => { handleNavClick(e); });

const handleNavClick = (e) => {
    const el = e.target;
    el.classList.toggle("ms-nav-active");
}