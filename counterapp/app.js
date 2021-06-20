let num = document.getElementById('num');
let add = document.getElementById('add');
let sub = document.getElementById('sub');
let reset = document.getElementById('reset');



add.addEventListener('click', () => {
    num.innerHTML++;
})

sub.addEventListener('click', () => {
    num.innerHTML--;
})

reset.addEventListener('click', () => {
    num.innerHTML = 0;
})