let cantidad = 0

let suma = 0

let promedio = 0

const notas = [];

function cargarCantidad() {
    cantidad = parseInt(prompt('Ingrese la cantidad de estudiantes a calificar'))
    /*if (isNaN(cantidad)) {
        alert('Debe ingresar un número')
    }*/
}

function cargarNota() {
    let nota = parseInt(prompt('Ingrese la calificación a contabilizar'));
    if (nota <= 10) {
        notas.push(nota)
    }
    else {
        alert('No ha ingresado una calificación válida')
    }
}

function sumarArray() {
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
}

function calcularPromedio() {
    promedio = suma / cantidad
}

cargarCantidad()

while (notas.length < cantidad) {
    cargarNota()

    if (notas.length >= cantidad) {
        let result = confirm('Presione aceptar para calcular el promedio de calificaciones o cancelar para finalizar.')

        if (result == true) {
            sumarArray()
            calcularPromedio()
            alert('El promedio es: ' + promedio)
        }
        else {
            alert('Las calificaciones han sido cargadas.')
        }
    }
}