// ==========================================
// Bloque 1: Selección de elementos y evento 'click' con función nombrada
// ==========================================
const button = document.getElementById("myButton"); //[span_5](start_span)[span_5](end_span)

function doSomething() {
  alert("Hello World"); //[span_6](start_span)[span_6](end_span)
}

button.addEventListener("click", doSomething); //[span_7](start_span)[span_7](end_span)


// ==========================================
// Bloque 2: Detección de movimiento del ratón ('mouseover' y 'mouseout')
// ==========================================
const box = document.getElementById("boxElement"); //[span_8](start_span)[span_8](end_span)

box.addEventListener("mouseover", function() {
  console.log("El cursor está sobre el elemento"); //[span_9](start_span)[span_9](end_span)
});

box.addEventListener("mouseout", function() {
  console.log("El cursor ha salido del elemento"); //[span_10](start_span)[span_10](end_span)
});


// ==========================================
// Bloque 3: Captura de teclado global ('keydown'), funciones flecha y objeto de evento 'e'
// ==========================================
window.addEventListener("keydown", (e) => { //[span_11](start_span)[span_11](end_span)
  console.log("Objeto de evento completo:", e); //[span_12](start_span)[span_12](end_span)
  console.log("Código de tecla pulsada:", e.code); //[span_13](start_span)[span_13](end_span)
  
  if (e.code === "KeyF") { //[span_14](start_span)[span_14](end_span)
    console.log("¡Se ha presionado la tecla F!"); //[span_15](start_span)[span_15](end_span)
  }
});


// ==========================================
// Bloque 4: Reactividad en tiempo real con evento 'input' y 'e.target.value'
// ==========================================
const inputField = document.getElementById("usernameInput"); //[span_16](start_span)[span_16](end_span)
const heading = document.getElementById("greetingHeading"); //[span_17](start_span)[span_17](end_span)

inputField.addEventListener("input", (e) => { //[span_18](start_span)[span_18](end_span)
  heading.innerText = e.target.value; //[span_19](start_span)[span_19](end_span)
});


// ==========================================
// Bloque 5: Eventos de ejecución única mediante el objeto de opciones ({ once: true })
// ==========================================
const singleButton = document.getElementById("singleButton"); //[span_20](start_span)[span_20](end_span)

singleButton.addEventListener("click", () => {
  console.log("Este mensaje y acción solo ocurrirán una sola vez."); //[span_21](start_span)[span_21](end_span)
}, { once: true }); //[span_22](start_span)[span_22](end_span)