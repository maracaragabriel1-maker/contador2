let numero = 0

function mais() {
    numero = numero + 1
    mostrar()

}
function mostrar() {
    document.querySelector("p").innerText = numero
}

function menos() {
    numero = numero - 1
    mostrar()
}