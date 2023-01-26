window.onload = function () {
    let form = document.querySelector('#form-newProduct');

    form.addEventListener('submit', (e) => {
        let errors = [];

        let nombre = document.querySelector('#nombreProduct');

        if (nombre.value == '' || nombre.length < 5) {

            errors.push('Debe ingresar un nombre y contener al menos 5 caracteres');
        };

        let descripcion = document.querySelector('#descripcion');

        if (descripcion.value == '' || descripcion.length < 20) {

            errors.push('Debe ingresar una descripcion y contener al menos 20 caracteres');
        };

        let imagen = document.getElementById('fotoProducto')
        var filePath = document.getElementById('fotoProducto').value;
        var extensiones = /(.jpg|.jpeg|.png|.gif)$/i;
        if (imagen.value != '' && !extensiones.exec(filePath) ) {

            errors.push('Las extensiones permitidas son .jpeg, .jpg, .png, .gif');
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


let hola = ("hola Mundo");
console.log(hola)
