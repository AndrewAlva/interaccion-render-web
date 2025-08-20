console.log("S03. E02. Objetos + Funciones (Métodos).");

// Canvas setup.
const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 1. Definir el objeto círculo y su método.
const circulo = {
    radio: 50,
    color: "#ff6600",
    dibujar: function(x, y) {
        ctx.beginPath();
        ctx.lineWidth = 2;

        ctx.strokeStyle = circulo.color;
        // ctx.strokeStyle = this.color;

        ctx.ellipse(x, y, circulo.radio, circulo.radio, 0, 0, Math.PI * 2);
        // ctx.ellipse(x, y, this.radio, this.radio, 0, 0, Math.PI * 2);

        ctx.stroke();
    }
};

// 2. Probar que el objeto no contenga errores.
circulo.dibujar(150, 150);

// 3. Crear evento para escuchar el click.
window.addEventListener("mousedown", function(eventData) {
    circulo.dibujar(eventData.clientX, eventData.clientY);
});