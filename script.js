const dis = document.querySelector('#result');
const mybtn = document.querySelector('#mybtn');

mybtn.addEventListener('click',sumOfNum);

function sumOfNum(){
    const num1 = document.querySelector('#num1').value;
    const num2 = document.querySelector('#num2').value;
    let fnum1 = parseFloat(num1);
    let fnum2 = parseFloat(num2);
    let sum = fnum1+fnum2;
    dis.value= sum;
}