
const calcular = document.getElementById('calcular');



calcular.addEventListener('click',function imc(){
        
    const nome = document.getElementById('nome1').value;
    const altura = document.getElementById('altura1').value;
    const peso = document.getElementById('peso1').value;
    const resultado = document.getElementById('resultado1');

    if(nome !== '' &&  altura !== '' && peso !== ''){
        const valorIMC = (peso/ (altura * altura)).toFixed(2);
        resultado.textContent = valorIMC;

        let classificação = '';

        if(valorIMC < 18.5){
            classificação ='abaixo do peso.'
        }else if(valorIMC < 25){
            classificação = 'peso ideal.'
            
        }else if( valorIMC < 30 ){
            classificação = 'Esta acima do peso'
        }else if (valorIMC < 35){
            classificação = 'obesidade grau 1'

        }else if(valorIMC < 40){
            classificação = 'obesidade grau 2'

        }else{
            classificação = ' obesidade grau 3. Cuidado!'
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e ${classificação}` 



    }else {
        resultado.textContent = 'Preencha todos.'
    }

});


