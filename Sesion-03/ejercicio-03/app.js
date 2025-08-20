console.log("S03. E03. Interpolación con GSAP.");

// 2. Comprobar que la librería se importó correctamente.
console.log(gsap);

// 3. Obtener referencia a nuestro elemento en HTML.
const circulo = document.getElementById("miCirculo");
console.log(circulo);

// 4. Animar inmediatamente usando gsap.to()
gsap.to(
    circulo,
    {
        x: 300,
        duration: 4, // en segundos
        ease: "power4.out"
    }
);