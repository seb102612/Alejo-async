function getUsers() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let todoSalioBien = true;

            if (todoSalioBien) {
                let usuarios = [
                    { id: 1, nombre: "Ana" },
                    { id: 2, nombre: "Luis" }
                ];
                resolve(usuarios);
            } else {
                reject("Error al cargar usuarios");
            }
        }, 2000);
    });
}

async function loadUsers() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "Cargando...";

    try {
        let usuarios = await getUsers();
        resultado.innerHTML = usuarios.map(u => u.nombre).join(" - ");
    } catch (error) {
        resultado.innerHTML = error;
    }
}