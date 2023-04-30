
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})

//----------------------Menu-------------------------

let menuResp = document.querySelector('#menu-icon');
let nav = document.querySelector('nav');

menuResp.onclick = () => {
    menuResp.classList.toggle('bx-x');
    nav.classList.toggle('open');
}


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

function mostraTexto() {
    var inputTextoo = document.getElementById("inputTexto").value;
    document.getElementById("fraseMostrada").innerHTML = inputTextoo;
    document.getElementById("fraseMostrada").style.display = "block";
}
//--------------------Inserir-nome-----------------------

function mostrarNome () {
    // Obtém o valor do input com id "nome"
    const nome = document.getElementById("nome").value;
    // Exibe o nome em um elemento com id "nome-exibido"
    document.getElementById("nome-exibido").textContent = nome;
    document.getElementById("nome1").textContent = nome;
    document.getElementById("nome2").textContent = nome;
}






