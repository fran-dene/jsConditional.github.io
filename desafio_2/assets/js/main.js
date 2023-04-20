const input1 = document.querySelector('#input-1');
const input2 = document.querySelector('#input-2');
const input3 = document.querySelector('#input-3');
const btn = document.querySelector('#btn-1');
const count = document.querySelector('#count');

btn.addEventListener('click', () => {
    if (+input1.value<0) {
        input1.value=0;
    };
    if (+input2.value<0) {
        input2.value=0;
    };
    if (+input3.value<0) {
        input3.value=0;
    };

    const sum = +input1.value + +input2.value + +input3.value;

    if (sum<=10){
        count.innerHTML = 'Llevas ' + sum + ' stickers';
    }else{
        count.innerHTML = 'Llevas demasiados sticker';
    }
});