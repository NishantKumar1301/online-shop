const mobileMenuBtnElement = document.getElementById("mobile-menu-btn");
const mobileMenuElement = document.getElementById("mobile-menu");

function toggleMobileMenu() {
    mobileMenuElement.classList.toggle('open');// Note open is a class not id
}

mobileMenuBtnElement.addEventListener("click", toggleMobileMenu);
