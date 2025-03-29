document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const opcoesMobile = document.getElementById("opcoes-mobile");
    const closeMenu = document.getElementById("close-menu");

    // Ao clicar no hambúrguer, abre o menu e mostra o "X"
    hamburger.addEventListener("click", function() {
        opcoesMobile.classList.add("active");
    });

    // Ao clicar no "X", fecha o menu
    closeMenu.addEventListener("click", function() {
        opcoesMobile.classList.remove("active");
    });
});


