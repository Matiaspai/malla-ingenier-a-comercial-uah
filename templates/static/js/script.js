document.addEventListener("DOMContentLoaded", () => {
  // Aplicar modo visual
  const modo = localStorage.getItem("modo") || "claro";
  document.body.classList.add(modo);
  document.getElementById("modo").value = modo;
});

function cambiarEstado(mencion, curso) {
  let progreso = JSON.parse(localStorage.getItem("progreso") || "{}");
  if (!progreso[mencion]) progreso[mencion] = {};
  progreso[mencion][curso] = progreso[mencion][curso] === "aprobado" ? "" : "aprobado";
  localStorage.setItem("progreso", JSON.stringify(progreso));
  location.reload();
}

function resetear() {
  if (confirm("¿Estás seguro de que deseas reiniciar tu progreso?")) {
    localStorage.clear();
    location.reload();
  }
}

function cambiarMencion() {
  const m = document.getElementById("mencion").value;
  window.location.href = "/?mencion=" + m;
}

function cambiarModo() {
  const modo = document.getElementById("modo").value;
  document.body.classList.remove("claro", "oscuro");
  document.body.classList.add(modo);
  localStorage.setItem("modo", modo);
}
