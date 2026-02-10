function mezclarPreguntas(array) {
    return array.sort(() => Math.random() - 0.5);
}

let preguntas = mezclarPreguntas([
    {
        texto: "¿Debes compartir tu contraseña con amigos?",
        opciones: ["Sí", "No", "Solo a veces"],
        correcta: 1
    },
    {
        texto: "¿Qué es el phishing?",
        opciones: ["Un antivirus", "Un engaño para robar datos", "Una red social"],
        correcta: 1
    },
    {
        texto: "¿Cuál es una contraseña segura?",
        opciones: ["123456", "miNombre", "A9#fT!2x"],
        correcta: 2
    },
    {
        texto: "¿Qué es malware?",
        opciones: ["Hardware", "Software malicioso", "Sistema operativo"],
        correcta: 1
    },
    {
        texto: "¿Qué acción es más segura?",
        opciones: ["Abrir enlaces desconocidos", "Configurar privacidad", "Compartir datos"],
        correcta: 1
    },
    {
        texto: "¿Qué es ransomware?",
        opciones: ["Un juego", "Un virus que pide rescate", "Un navegador"],
        correcta: 1
    },
    {
        texto: "¿Para qué sirve un antivirus?",
        opciones: ["Eliminar virus", "Crear archivos", "Conectar internet"],
        correcta: 0
    },
    {
        texto: "¿Qué debes hacer en un equipo público?",
        opciones: ["Guardar contraseñas", "Cerrar sesión", "Nada"],
        correcta: 1
    },
    {
        texto: "¿Qué es la ingeniería social?",
        opciones: ["Programación", "Manipulación mediante engaños", "Diseño web"],
        correcta: 1
    },
    {
        texto: "¿Por qué actualizar el sistema?",
        opciones: ["Cambiar color", "Mejorar seguridad", "Eliminar programas"],
        correcta: 1
    }
]);

let actual = 0;
let puntos = 0;

function mostrarPregunta() {
    document.getElementById("pregunta").textContent = preguntas[actual].texto;

    const botones = document.querySelectorAll(".game-box button");
    botones[0].textContent = preguntas[actual].opciones[0];
    botones[1].textContent = preguntas[actual].opciones[1];
    botones[2].textContent = preguntas[actual].opciones[2];
}

function responder(opcion) {
    const resultado = document.getElementById("resultado");

    if (opcion === preguntas[actual].correcta) {
        puntos++;
        resultado.textContent = "✅ Correcto";
        resultado.style.color = "lightgreen";
    } else {
        resultado.textContent = "❌ Incorrecto";
        resultado.style.color = "red";
    }

    actual++;

    setTimeout(() => {
        resultado.textContent = "";
        if (actual < preguntas.length) {
            mostrarPregunta();
        } else {
            document.getElementById("pregunta").textContent =
                `Puntaje final: ${puntos} / ${preguntas.length}`;
        }
    }, 1200);
}

function reiniciarQuiz() {
    actual = 0;
    puntos = 0;
    preguntas = mezclarPreguntas(preguntas);
    document.getElementById("resultado").textContent = "";
    mostrarPregunta();
}

mostrarPregunta();

// ===== CONTROL DE SECCIONES =====
function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.section');

    secciones.forEach(seccion => {
        seccion.style.display = 'none';
    });

    const activa = document.getElementById(id);
    if (activa) {
        activa.style.display = 'block';
        window.scrollTo(0, 0);
    }
}
