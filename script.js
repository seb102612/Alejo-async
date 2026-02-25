function getUser() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            let usuario = { id: 5, nombre: "María" };
            resolve(usuario);
        }, 1500);
    });
}

function getTasksByUser(userId) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            let tareas = [
                { id: 1, titulo: "Comprar leche", userId: 5 },
                { id: 2, titulo: "Estudiar Front", userId: 5 }
            ];
            resolve(tareas);
        }, 1000);
    });
}

async function loadUserTasks() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "Cargando...";

    try {
        let usuario = await getUser();
        let tareas = await getTasksByUser(usuario.id);

        resultado.innerHTML =
            "<strong>Usuario:</strong> " + usuario.nombre + "<br>" +
            "<strong>Tareas:</strong> " + tareas.map(t => t.titulo).join(", ");
    } catch (error) {
        resultado.innerHTML = "Error: " + error;
    }
}