
const butones = document.querySelectorAll('button')
butones.forEach(boton => {
    boton.addEventListener('click', (event) => {
        if (event.target.id == 1) {
            var lista = [];
            var boolean = true;
            var resP = document.getElementById('res');
            while (boolean == true) {
                var cadenas = prompt('Ingresar una cadena de texto');

                if (cadenas == null) {
                    boolean = false;
                } else {
                    lista.push(cadenas)
                }
            }
            resP.textContent = "La lista es: " + lista;
        }
    })
})
//Ejercicio 3
function hola() {
    var h1 = document.getElementById('h1');
    var h2 = document.getElementById('h2');
    var h3 = document.getElementById('h3');
    h1.textContent = "hola mundo";
    h2.textContent = "hola mundo";
    h3.textContent = "hola mundo";
}
//Ejercicio 4
function holaMundo() {
    console.log("¡Hola mundo!");
}

//Ejercicio 5
function numeroMayor() {
    var number1 = Number(document.getElementById('number1').value);
    var number2 = Number(document.getElementById('number2').value);
    if (number1 > number2) {
        alert(number1 + " " + "es el mayor");
    } else {
        alert(number2 + " " + "es el mayor");
    }
}

//Ejercicio 6
function getNumberRandom(min,max){
    var select = document.getElementById('select');
    select.innerHTML = ""//Borramos el contenido
    var template = document.getElementById('template').content;
    var fragment = document.createDocumentFragment();

    for (let i = 1; i <= 5; i++){
        var numberRandom = Math.round(Math.random() * (max - min)+ min);
        template.querySelector('#sele').textContent=numberRandom;
        var clone = template.cloneNode(true);
        fragment.appendChild(clone);
    }
    select.appendChild(fragment)
    
}
//Ejercicio 7
function ingresar(){
    var name = document.getElementById('name').value;
    if(name !== ''){
        heading1 = document.getElementById('title'); //Guardamos la Etiqueta h1;
        heading1.textContent = `Hola ${name}, Bienvenido a mi sitio web`;
        cambiar.style.display = 'block'
    }    
}
const cambiar = document.getElementById('cambiar');
cambiar.style.display = 'none';
cambiar.addEventListener('click',function(){
    heading1.style.color = 'green';
    heading1.style.fontSize = '50px';
});

//Ejercicio 8
function getMultiplicacion(){
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var res_mult = document.getElementById('res_mult');
    var operacion = num1 * num2;
    res_mult.textContent = `${num1} multiplicado ${num2} es igual a ${operacion}`;
}

//Ejercicio 9
function confirmacion(){
    var pregunta = prompt("¿Deseas visitar la pagina principal?");

    if(pregunta=="si"){
        console.log("Te envio alli rapidamente");
        location="https://uls.edu.sv";
    }else{
        console.log("Quizas en otro momento...\n Gracias de todas formas");
    } 
}
//Ejercicio 10
function fLowerCase(){
    var frase = document.getElementById('frase').value;
    var response = document.getElementById('response');
    var fLower = frase.toLowerCase();
    response.value = fLower;
}
function fUpperCase(){
    var frase = document.getElementById('frase').value;
    var response = document.getElementById('response');
    var fLower = frase.toUpperCase();
    response.value = fLower;
}
function fCapitalize(){
    var frase = document.getElementById('frase').value;
    var response = document.getElementById('response');
    String.prototype.capitalize = function () {
        return this.replace(/(^|\s)([a-z])/g, function (m, p1, p2) { return p1 + p2.toUpperCase(); });
    };
    var fraseCap = frase.capitalize();
    response.value = fraseCap;
}