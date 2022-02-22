/*
English: Create a **function** to tell me if a number entered by a user is odd or even.
Spanish: Crear una **función** que me diga si un numero ingresado por usuario es par o impar.
*/

//let num = prompt('Ingress a number int');
let num = 31;
let result = (num % 2);
function OddEven(num, result) {
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
OddEven(num, result);




