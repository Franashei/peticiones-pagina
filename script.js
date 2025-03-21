document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("Yes");
    const noButton = document.getElementById("No");
    const form = document.querySelector("form");

    // Evitar que el formulario se envíe y recargue la página
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    });

    // Función para obtener una posición aleatoria dentro del viewport
    const moveButtonRandomly = () => {
        const maxX = window.innerWidth - noButton.clientWidth - 20;
        const maxY = window.innerHeight - noButton.clientHeight - 20;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    };

    // Mover el botón cuando el mouse pasa sobre él
    noButton.addEventListener("mouseenter", moveButtonRandomly);

    // Mover el botón también cuando se hace clic en él
    noButton.addEventListener("click", (event) => {
        event.preventDefault();
        moveButtonRandomly();
    });

    // Mensaje de confirmación al hacer clic en "Sí"
    yesButton.addEventListener("click", (event) => {
        event.preventDefault();
        alert("PENEEE")
    });
});
