const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", async (e) => {
    e.preventDefault(); // Evita que recargue la página

    const formData = new FormData(formulario);

    const aceptaCheckbox = document.getElementById("aceptaTerminos");

    const datos = {
      tipoCobertura: formData.get("tipoCobertura"),
      nombre: formData.get("nombre"),
      edad: formData.get("edad"),
      dni: formData.get("dni"),
      ciudad: formData.get("ciudad"),
      email: formData.get("email"),
      telefono: formData.get("telefono"),
      disponibilidad: formData.get("disponibilidad"),
      cantidadFamilia: formData.get("cantidadFamilia"),
      situacionLaboral: formData.get("situacionLaboral"),
      observaciones: formData.get("observaciones"),
      obraSocial: formData.get("obraSocial"),
      aceptaTerminos: aceptaCheckbox.checked
    };

    try {
      const response = await fetch("/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
      });

      if (response.ok) {
        Toastify({
          text: "Formulario enviado correctamente. Te contactaremos pronto.",
          className: "info",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
        }).showToast();
        formulario.reset(); // Limpia el formulario
      } else {
          Toastify({
          text: "Hubo un error al enviar el formulario.",
          className: "info",
          style: {
            background: "linear-gradient(to right,rgb(255, 0, 0),rgb(221, 72, 72))",
          }
        }).showToast();
      }
    } catch (err) {
      console.error(err);
          Toastify({
          text: "Hubo un error de conexion.",
          className: "info",
          style: {
            background: "linear-gradient(to right,rgb(255, 0, 0),rgb(221, 72, 72))",
          }
        }).showToast();
    }
  });


  const opciones = document.querySelectorAll(".opcion");
  const inputTipoCobertura = document.getElementById("tipoCobertura");

  formulario.addEventListener("submit", () => {
    document.querySelectorAll('.opcion').forEach(opcion => {
      opcion.classList.remove('seleccionada');
    });
  });
  const campoFamilia = document.getElementById("cantidadFamilia");

opciones.forEach(opcion => {
  opcion.addEventListener("click", () => {
    opciones.forEach(o => o.classList.remove("seleccionada"));
    opcion.classList.add("seleccionada");

    const valor = opcion.dataset.valor;
    inputTipoCobertura.value = valor;

    mostrarFormularioAnimado();


    if (valor === "familia" || valor === "hijos") {
      campoFamilia.style.display = "block";
      campoFamilia.required = true;
    } else {
      campoFamilia.style.display = "none";
      campoFamilia.value = ""; 
      campoFamilia.required = false;
    }
  });
});

function mostrarFormularioAnimado() {
  const form = document.getElementById("formularioCompleto");
  form.classList.add("formulario-visible");
  form.classList.remove("formulario-oculto");

  requestAnimationFrame(() => {
    form.style.maxHeight = form.scrollHeight + "px";
  });
}