window.onload = function () {
    let form = document.querySelector('#form-login');

    form.addEventListener('submit', (e) => {
        let errors = [];

        let nombre = document.querySelector('#email');
        var emailValido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+\.\S+/.test(email.value);

        if (nombre.value == '' || !emailValido) {
            errors.push('Debe ingresar un email y debe ser valido');
        };

        let clave = document.querySelector('#clave');

        if (clave.value == '') {

            errors.push('Debe ingresar una contraseña');
        };

        if (errors.length > 0) {
            e.preventDefault();
            let ulErrores = document.querySelector(".errores ul");
            errors.forEach(error => {
                ulErrores.innerHTML += `<li>${error}</li>`
            });

            ulErrores.style.color = "red";
            ulErrores.style.textAlign = "center";
        };
    })
}




