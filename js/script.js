const botonLeer = document.getElementById("boton-leer");
const contenidoOculto = document.getElementById("contenido-oculto");

botonLeer.addEventListener("click", () => {
  if (contenidoOculto.classList.contains("hidden")) {
    contenidoOculto.classList.remove("hidden");
    botonLeer.textContent = "Leer menos";
  } else {
    contenidoOculto.classList.add("hidden");
    botonLeer.textContent = "Leer más";
  }
});
const botonLeer1 = document.getElementById("boton-leer1");
const contenidoOculto1 = document.getElementById("contenido-oculto1");

botonLeer1.addEventListener("click", () => {
  if (contenidoOculto1.classList.contains("hidden")) {
    contenidoOculto1.classList.remove("hidden");
    botonLeer1.textContent = "Leer menos";
  } else {
    contenidoOculto1.classList.add("hidden");
    botonLeer1.textContent = "Leer más";
  }
});
const botonLeer2 = document.getElementById("boton-leer2");
const contenidoOculto2 = document.getElementById("contenido-oculto2");

botonLeer2.addEventListener("click", () => {
  if (contenidoOculto2.classList.contains("hidden")) {
    contenidoOculto2.classList.remove("hidden");
    botonLeer2.textContent = "Leer menos";
  } else {
    contenidoOculto2.classList.add("hidden");
    botonLeer2.textContent = "Leer más";
  }
});
const botonLeer3 = document.getElementById("boton-leer3");
const contenidoOculto3 = document.getElementById("contenido-oculto3");

botonLeer3.addEventListener("click", () => {
  if (contenidoOculto3.classList.contains("hidden")) {
    contenidoOculto3.classList.remove("hidden");
    botonLeer3.textContent = "Leer menos";
  } else {
    contenidoOculto3.classList.add("hidden");
    botonLeer3.textContent = "Leer más";
  }
});
const botonLeer4 = document.getElementById("boton-leer4");
const contenidoOculto4 = document.getElementById("contenido-oculto4");

botonLeer4.addEventListener("click", () => {
  if (contenidoOculto4.classList.contains("hidden")) {
    contenidoOculto4.classList.remove("hidden");
    botonLeer4.textContent = "Leer menos";
  } else {
    contenidoOculto4.classList.add("hidden");
    botonLeer4.textContent = "Leer más";
  }
});
