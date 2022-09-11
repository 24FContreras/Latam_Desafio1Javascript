const precio = 400000;
let cantidadUsuario = document.querySelector("#cantidadUsuario");
let colorUsuario = document.querySelector("#colorUsuario");
const submit = document.querySelector("#submit");
let precioTotal = document.querySelector("#precioTotal");
let cantidadTotal = document.querySelector("#cantidadTotal");
let colorRing = document.querySelector("#colorRing");

submit.addEventListener("click", function () {
  precioTotal.innerHTML = Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(Number(cantidadUsuario.value) * precio);

  cantidadTotal.innerHTML = cantidadUsuario.value;
  colorRing.style.backgroundColor = colorUsuario.value;
});

precioTotal.innerHTML = Number(cantidadUsuario.value) * precio;
