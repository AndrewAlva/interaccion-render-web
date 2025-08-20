console.log("S03. E04. Eventos + Interpolación con GSAP.");

// 2. Comprobar que la librería se importó correctamente.
console.log(gsap);

// 3. Obtener referencia a nuestro elemento en HTML.
const circulo = document.getElementById("miCirculo");
console.log(circulo);

// 4. Crear event listener de "mousedown" sobre el círculo
circulo.addEventListener("mousedown", function() {

    // 5. Animar al click usando gsap.to()
    gsap.to(
        circulo,
        {
            x: 300,
            duration: 4, // en segundos
            ease: "power4.out"
        }
    );

});