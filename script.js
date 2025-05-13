document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".idioma-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const lang = button.getAttribute("data-lang");
            // Redirección a la página correspondiente
            if (lang === "eus") {
                window.location.href = "tokitandoc_eu.html";
            } else {
                window.location.href = "tokitandoc_es.html";
            }
        });

        // Animación al hacer hover (añade un pulso)
        button.addEventListener("mouseover", () => {
            button.classList.add("pulse");
        });
        button.addEventListener("mouseleave", () => {
            button.classList.remove("pulse");
        });
    });
});
