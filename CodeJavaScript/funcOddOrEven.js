/*
English: Create a **function** to tell me if a number entered by a user is odd or even.
Spanish: Crear una **función** que me diga si un numero ingresado por usuario es par o impar.
*/

//let num = prompt('Ingress a number int');
let num = 207548;
function OddEven(num) {
    let result = (num % 2);
    if( result === 0)
    {
        console.log('The' + num + 'Is Odd');
        //alert('The ' + num + ' Is Odd');
    }
    else
    {
        console.log('The' + num + 'Is Even');
        //alert('The ' + num + ' Is Even');
    }
}
console.info(OddEven);
OddEven(num);




