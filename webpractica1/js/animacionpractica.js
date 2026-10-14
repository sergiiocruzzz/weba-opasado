const imagenes = document.querySelectorAll(".ampliable"); /*per a enllaçar,cridar la classe ampliable amb  imagenes */
const visor = document.getElementById("visor");
const imagenGrande = document.getElementById("imagenGrande");

if (visor && imagenGrande) {

    imagenes.forEach(imagen => {
        imagen.addEventListener("click", () => {
            imagenGrande.src = imagen.src;
            visor.style.display = "flex";
        });
    });

    visor.addEventListener("click", () => {
        visor.style.display = "none";
    });

}

document.addEventListener("DOMContentLoaded", () => { /*Se espera a que toda la página termine de cargarse antes de ejecutar el código.*/

    if (!localStorage.getItem("visited")) {   /*Se comprueba si el usuario ya había visitado la página anteriormente. si es la primera vez uqe visita la pagina sale el mensaje de bienvenida*/
        alert("🎉 Bienvenido a la página");
        localStorage.setItem("visited", "true");
    }

});
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("form");               /*para obtener los elementos del formulario que se validarán*/
   
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const emailValue = email.value;
        const passwordValue = password.value;
        const confirmValue = confirmPassword.value; /* Con la id de confirmPassword se puede validar que las contraseñas coincidan antes de enviar el formulario */


        // VALIDAR EMAIL
        if (!emailValue.includes("@")) {          /*Comprueba que el correo contenga el símbolo @.*/
            alert("El email debe contener @");
            return;
        }

        const partes = emailValue.split("@");   /*Divide el correo en dos partes: nombre de usuario y dominio.*/

        if (partes.length !== 2 || !partes[1].includes(".")) {
            alert("El dominio del email no es válido");                       /*Verifica que exista un dominio válido después de la arroba, por ejemplo .com, .es, etc.*/
            return;
        }

        // VALIDAR CONTRASEÑA
        if (passwordValue !== confirmValue) {    /*Comprueba que la contraseña y la confirmación sean exactamente iguales.*/
            alert("Las contraseñas no coinciden");
            return;
        }

        alert("Registro correcto");
    });

});