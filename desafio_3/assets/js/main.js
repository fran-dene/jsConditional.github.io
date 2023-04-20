const input1 = document.querySelector('#input-1');
const input2 = document.querySelector('#input-2');
const input3 = document.querySelector('#input-3');
const text = document.querySelector('#text');
const btn = document.querySelector('#btn-1');

btn.addEventListener('click', () => {
    const password= input1.value + input2.value + input3.value
    if (password == '911') {
        text.innerHTML = "password 1 correcto";
    }
    else if (password == '714') {
        text.innerHTML = "password 2 correcto";
    }
    else {
        text.innerHTML = "password incorrecto";
    }
});

