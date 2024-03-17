// calcular quantos kg perco em x semanas
// quantas semanas seria;
// dividir decifit por valor de 1kg
const inputDeficit = document.querySelector('#deficit');
const inputDay = document.querySelector('#days');

const convertDeficit = Number(inputDeficit.value);
const convertDays = Number(inputDay.value);

console.log(typeof convertDeficit)
console.log(typeof convertDays)


document.querySelector('button').addEventListener('click', calculoPerda)
const valorKg = 7.700;

function calculoPerda(){
    const calcular = Math.floor(convertDeficit * convertDays / valorKg)
    alert(calcular)
}


 