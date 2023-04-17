
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})

//------------------------------------------------------

window.sr = ScrollReveal({ reset: true });

sr.reveal('motivationWords', { duration: 1000 });

//--------------------Calculadora-----------------------
function inserir(num) {
    var insertNumero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = insertNumero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    var backNumero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = backNumero.substring(0, backNumero.length - 1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;

    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = "Error";
    }
}

//--------------------Imgaem-Frase-----------------------

const entrada = document.getElementById('campo');
const saida = document.getElementById('saida');

entrada.addEventListener("input", function(){
    saida.value = entrada.value;
});

//--------------------Inserir-nome-----------------------

const txt1 = document.getElementById('tbuser');
const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('output1');

function fun1(){
    out1.innerHTML = txt1.value;
}

btn1.addEventListener('click',fun1);

function myFunction(){
    let userInput = document.querySelector("#userInput");
    let message = document.querySelector("#message");


    message.innerHTML = "welcome" + userInput;

}





