
// active

const nav = document.querySelectorAll('li');
nav.forEach((item)=>{
    item.addEventListener('click',()=>{
        document.querySelector('.active')?.classList.remove('active')
        item.classList.add('active')
        // e.classList.add('active')
    })
})

 
// imc

document.querySelector('#btn-imc').addEventListener('click',()=>{
    const res = document.querySelector('#res-imc');
    const inputAltura = document.querySelector('#altura');
    const inputPeso = document.querySelector('#peso');
    if(inputAltura.value == '' || inputPeso.value == ''){
       return alert('preencha o campo')
    }
    const calculo =  inputPeso.value / (inputAltura.value*inputAltura.value) ;
    res.innerHTML = `Seu imc é de <strong> ${calculo.toFixed(1)}</strong>`

})
// perder peso
document.querySelector('#btn-perde-peso').addEventListener('click', ()=>{
    
    const inputDeficit = document.querySelector('#deficit');
    const inputDay = document.querySelector('#days');
    const result = document.querySelector('#res-perde-peso');

    let convertDeficit = Number(inputDeficit.value);
    let convertDays = Number(inputDay.value);
    const valorKg = 7.700;
    const calculo = Math.floor(convertDeficit * convertDays / valorKg);
    if(calculo == 0){
        alert('preencha os campos')
        return
    }
    result.innerHTML = calculo >= 1000? `Você irá perder <strong>${calculo}</strong> kg`: `Você irá perder <strong>${calculo}</strong> gr`

})

// agua

document.querySelector('#btn-agua').addEventListener('click',()=>{
    const peso = document.querySelector('#peso-agua');
    const res = document.querySelector('#res-agua');
    if(peso.value == ''){
        return alert('preencha o campo')
    }
    const calculo = peso.value * 35;
    res.innerHTML = calculo
})