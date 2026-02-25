function login(email, password) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let emailCorrecto = "admin@correo.com";
            let passCorrecta = "123456";

            if (email === emailCorrecto && password === passCorrecta) {
                resolve("Login exitoso");
            } else {
                reject("Credenciales incorrectas");
            }
        }, 2000);
    });
}

async function startLogin() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "Verificando...";

    let email = "admin@correo.com";
    let password = "123456";

    try {
        let mensaje = await login(email, password);
        resultado.innerHTML = "✅ " + mensaje;
    } catch (error) {
        resultado.innerHTML = "❌ " + error;
    }
}