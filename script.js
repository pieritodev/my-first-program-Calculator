let expresion = "";

// Función para abrir y cerrar el menú Pro con la flechita
function togglePro() {
    let panel = document.getElementById("panel-pro");
    let btn = document.getElementById("btn-toggle-pro");
    
    panel.classList.toggle("oculto");
    
    if (panel.classList.contains("oculto")) {
        btn.textContent = "🔽 Pro";
    } else {
        btn.textContent = "🔼 Pro";
    }
}

// Añade números o símbolos a la pantalla
function agregarCaracter(caracter) {
    // Si la pantalla dice "0" o "Error", la limpiamos antes de escribir
    if (document.getElementById("resultado").textContent === "0" || 
        document.getElementById("resultado").textContent === "Error") {
        expresion = "";
    }
    
    expresion += caracter;
    document.getElementById("resultado").textContent = expresion;
}

// Calcula el resultado de la operación estándar (+, -, *, /)
function calcularResultado() {
    try {
        // eval() evalúa el texto matemático escrito (ej. "5+5*2")
        let res = eval(expresion);
        document.getElementById("resultado").textContent = res;
        expresion = res.toString(); // Permite seguir operando con el resultado
    } catch (error) {
        document.getElementById("resultado").textContent = "Error";
        expresion = "";
    }
}

// Borrar todo (C)
function borrarTodo() {
    expresion = "";
    document.getElementById("resultado").textContent = "0";
}

// Obtiene el número actual en pantalla para las funciones Pro
function obtenerValorActual() {
    let texto = document.getElementById("resultado").textContent;
    let valor = parseFloat(texto);
    return isNaN(valor) ? 0 : valor;
}

// Funciones Pro
function duplicarNumero() {
    let valor = obtenerValorActual();
    let res = valor * 2;
    document.getElementById("resultado").textContent = res;
    expresion = res.toString();
}

function calcularPorcentaje() {
    let valor = obtenerValorActual();
    let res = valor * 0.15;
    document.getElementById("resultado").textContent = res.toFixed(2);
    expresion = res.toString();
}

function convertirPulgadasACm() {
    let valor = obtenerValorActual();
    let cm = valor * 2.54;
    document.getElementById("resultado").textContent = cm.toFixed(2) + " cm";
    expresion = cm.toString();
}

// Funciones científicas (Cuadrado y Raíz)
function calcularCuadrado() {
    let valor = obtenerValorActual();
    let res = valor * valor;
    document.getElementById("resultado").textContent = res;
    expresion = res.toString();
}

function calcularRaiz() {
    let valor = obtenerValorActual();
    if (valor < 0) {
        document.getElementById("resultado").textContent = "Error";
        expresion = "";
        return;
    }
    let res = Math.sqrt(valor);
    document.getElementById("resultado").textContent = res.toFixed(2);
    expresion = res.toString();
}