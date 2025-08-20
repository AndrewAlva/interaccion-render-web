console.log("S03. E01. Funciones.");

// Canvas setup.
const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 1. Definir función
function dibujarCirculo(x, y, radio, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.ellipse(x, y, radio, radio, 0, 0, Math.PI * 2);
    ctx.stroke();
}

// 2. Probar que la función no contenga errores.
dibujarCirculo(150, 150, 80, "#00ff66");

// 3. Crear evento para escuchar el click.
window.addEventListener("mousedown", function(eventData) {
    dibujarCirculo(eventData.clientX, eventData.clientY, 50, "#00ff66");
});