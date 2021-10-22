const d = new Date();
document.getElementById("demo").innerHTML = d;
let btnPrimary = document.querySelector('#conforme');
let btnDanger = document.querySelector('#naoconforme');
let btnSuccess = document.querySelector('#naoaplica');

btnPrimary.addEventListener('click', () => btnDanger.style.backgroundColor='#808080')
btnPrimary.addEventListener('click', () => btnSuccess.style.backgroundColor='#808080')
btnPrimary.addEventListener('click', () => btnDanger.disabled=true)
btnPrimary.addEventListener('click', () => btnSuccess.disabled=true)

btnDanger.addEventListener('click', () => btnPrimary.style.backgroundColor='#808080')
btnDanger.addEventListener('click', () => btnSuccess.style.backgroundColor='#808080')
btnDanger.addEventListener('click', () => btnPrimary.disabled=true)
btnDanger.addEventListener('click', () => btnSuccess.disabled=true)

btnSuccess.addEventListener('click', () => btnPrimary.style.backgroundColor='#808080')
btnSuccess.addEventListener('click', () => btnDanger.style.backgroundColor='#808080')
btnSuccess.addEventListener('click', () => btnPrimary.disabled=true)
btnSuccess.addEventListener('click', () => btnDanger.disabled=true)
