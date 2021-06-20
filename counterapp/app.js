let num = document.getElementById('num');

let buttons = document.getElementById('buttons');

buttons.addEventListener('click', (e) => {
    if (e.target.classList.contains("add")) {
        num.innerHTML++;
        setColor()
    }
    if (e.target.classList.contains('sub')) {
        num.innerHTML--;
        setColor()
    }
    if (e.target.classList.contains('reset')) {
        num.innerHTML = 0;
        setColor()
    }
})

function setColor() {
    if (num.innerHTML > 0) {
        num.style.color = 'green';
    } else if (num.innerHTML < 0) {
        num.style.color = 'red';
    } else {
        num.style.color = 'black'
    }
}
