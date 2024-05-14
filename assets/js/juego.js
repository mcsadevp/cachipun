let maquina = 0;
let usuario = 0;

let veces = obtenerCantidadJuegos();

for (let i = 0; i < veces; i++) {
    let jugadaUsuario = obtenerJugadaUsuario();

    let jugadaMaquina = obtenerJugadaMaquina();

    determinarResultado(jugadaUsuario, jugadaMaquina);
}

mostrarGanador();

function obtenerCantidadJuegos() {
    let veces = parseInt(prompt("¿Cuántas veces deseas jugar?"));

    while (isNaN(veces) || veces <= 0) {
        veces = parseInt(prompt("Por favor, ingresa un número válido mayor que cero."));
    }

    return veces;
}

function obtenerJugadaUsuario() {
    let jugadaUsuario = prompt("Ingrese su jugada: Piedra, Papel o Tijera").trim().toLowerCase();

    while (jugadaUsuario !== "piedra" && jugadaUsuario !== "papel" && jugadaUsuario !== "tijera") {
        jugadaUsuario = prompt("Jugada inválida. Ingrese su jugada nuevamente: Piedra, Papel o Tijera").trim().toLowerCase();
    }

    return jugadaUsuario;
}

function obtenerJugadaMaquina() {
    let numeroAleatorio = Math.floor(Math.random() * 3);
    let jugadaMaquina = "";

    switch (numeroAleatorio) {
        case 0:
            jugadaMaquina = "piedra";
            break;
        case 1:
            jugadaMaquina = "papel";
            break;
        case 2:
            jugadaMaquina = "tijera";
            break;
    }

    return jugadaMaquina;
}

function determinarResultado(jugadaUsuario, jugadaMaquina) {
    if (jugadaUsuario === jugadaMaquina) {
        alert("¡Es un empate! Ambos eligieron " + jugadaUsuario + ".");
    } else if (
        (jugadaUsuario === "piedra" && jugadaMaquina === "tijera") ||
        (jugadaUsuario === "papel" && jugadaMaquina === "piedra") ||
        (jugadaUsuario === "tijera" && jugadaMaquina === "papel")
    ) {
        alert("¡Felicidades! Ganaste. La máquina eligió " + jugadaMaquina + ".");
        usuario++;
    } else {
        alert("¡Has perdido! La máquina eligió " + jugadaMaquina + ".");
        maquina++;
    }
}

function mostrarGanador() {
    if (maquina > usuario) {
        alert("Ganó la máquina.");
        imgSrc = "assets/img/download (2).jpeg";
    } else if (maquina < usuario) {
        alert("¡Felicidades! ¡Ganaste!");
        imgSrc = "assets/img/download (1).jpeg";
    } else {
        alert("¡Es un empate!.");
        imgSrc = "assets/img/download.jpeg";
    }

    document.getElementById("ganadorImg").src = imgSrc;
    document.getElementById("ganadorImg").style.display = "block";
}
