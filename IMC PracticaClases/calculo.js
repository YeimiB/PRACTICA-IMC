function calcularIMC() {
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var imc = peso / (altura * altura);
    document.getElementById('imc').innerHTML = 'Tu IMC es: ' + imc.toFixed(2);

    var resultado = '';
    if (imc < 18.5) {
        resultado = 'Bajo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado = 'Normal';
    } else if (imc >= 25 && imc < 29.9) {
        resultado = 'Sobrepeso';
    } else {
        resultado = 'Obesidad';
    }
    document.getElementById('resultado').innerHTML = 'Tu clasificación es: ' + resultado;
    
}
