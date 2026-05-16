function irReservas(){

    const reservas = document.getElementById("reservas");

    reservas.scrollIntoView({
        behavior:"smooth"
    });
}

const formulario = document.getElementById("formulario");

const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();

    const telefono = document.getElementById("telefono").value.trim();

    const personas = document.getElementById("personas").value;

    const fecha = document.getElementById("fecha").value;

    if(nombre.length < 3){

        mensaje.innerHTML = "⚠️ Ingresa un nombre válido";

        return;
    }

    if(!/^3\d{9}$/.test(telefono)){

        mensaje.innerHTML = "⚠️ El teléfono debe tener 10 dígitos";

        return;
    }

    if(personas < 1){

        mensaje.innerHTML = "⚠️ Debes ingresar mínimo 1 persona";

        return;
    }

    if(fecha === ""){

        mensaje.innerHTML = "⚠️ Selecciona una fecha";

        return;
    }

    mensaje.innerHTML =
    `✨ Reserva confirmada para <strong>${nombre}</strong>.`;

    formulario.reset();
});

const modoBtn = document.getElementById("modoBtn");

modoBtn.addEventListener("click", function(){

    document.body.classList.toggle("modo-activo");

    if(document.body.classList.contains("modo-activo")){

        modoBtn.innerHTML = "Modo Activado ✨";

    }else{

        modoBtn.innerHTML = "Activar Modo Night";
    }
});