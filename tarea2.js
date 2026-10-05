const inputEdad = document.querySelector("#edad");
const botonVerificarEdad = document.querySelector("#verificarEdad");
const resultadoEdad = document.querySelector("#resultadoEdad");

const inputClima = document.querySelector("#clima");
const botonVerificarClima = document.querySelector("#verificarClima");
const resultadoClima = document.querySelector("#resultadoClima");

function mostrarResultado(elemento, mensaje, tipo) {
    elemento.textContent = mensaje;
    elemento.classList.remove("error", "success");
    elemento.classList.add(tipo);
}

botonVerificarEdad.addEventListener("click", () => {
    const edad = Number(inputEdad.value);

    if (inputEdad.value === "" || !Number.isInteger(edad) || edad < 0) {
        mostrarResultado(resultadoEdad, "Ingresa una edad válida.", "error");
        return;
    }

    if (edad >= 18) {
        mostrarResultado(resultadoEdad, "Puedes ingresar al club.", "success");
    } else {
        mostrarResultado(resultadoEdad, "Debes tener 18 años o más para ingresar.", "error");
    }
});

botonVerificarClima.addEventListener("click", () => {
    const clima = inputClima.value.trim().toLowerCase();

    if (clima === "") {
        mostrarResultado(resultadoClima, "Ingresa si hace calor o frío.", "error");
        return;
    }

    if (clima === "calor") {
        mostrarResultado(resultadoClima, "Ya está haciendo calor, no olvides usar protector solar.", "success");
    } else if (clima === "frio" || clima === "frío") {
        mostrarResultado(resultadoClima, "Ya está haciendo frío, no olvides abrigarte.", "success");
    } else {
        mostrarResultado(resultadoClima, "No entendí la respuesta. Escribe calor o frio.", "error");
    }
});

