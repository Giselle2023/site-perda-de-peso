const inputDeficit = document.querySelector('#deficit');
const inputDay = document.querySelector('#days');
const result = document.querySelector('#res-perde-peso');

document.querySelector('#btn-perde-peso').addEventListener('click', ()=>{

    let convertDeficit = Number(inputDeficit.value);
    let convertDays = Number(inputDay.value);
    const valorKg = 7.700;
    const calculo = Math.floor(convertDeficit * convertDays / valorKg);
    if(calculo == 0){
        alert('preencha os campos')
        return
    }
    result.innerHTML = calculo >= 1000? `Você perdeu ${calculo} kg`: `Você perdeu ${calculo} gr`

})
 
// imc

document.querySelector('#btn-imc').addEventListener('click',()=>{
    const res = document.querySelector('#res-imc');
    const inputAltura = document.querySelector('#altura');
    const inputPeso = document.querySelector('#peso');
    const calculo =  inputPeso.value / (inputAltura.value*inputAltura.value) ;
    res.innerHTML = `Seu imc é de <strong> ${calculo.toFixed(1)}</strong>`

})