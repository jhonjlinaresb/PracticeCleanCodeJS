/*
English: Create a **function** to tell me if a number entered by a user is odd or even.
Spanish: Crear una **función** que me diga si un numero ingresado por usuario es par o impar.
*/

let num = 36271;
//let num = prompt("Ingress a number int"); -> Use to request user number ; Utilizar para pedir numero a usuario
function OddEven(num) {
    let result = (num % 2);
    if( result === 0)
    {
        let oddResult = ('The ' + num + ' Is Odd'); // alert('The ' + num + ' Is Odd')); -> Use to display alert on screen ; Usar para mostrar alerta en pantalla
        console.log(oddResult);
    }
    else
    {
        let evenResult = ('The ' + num + ' Is Even'); // alert('The ' + num + ' Is Even')); -> Use to display alert on screen ; Usar para mostrar alerta en pantalla
        console.log(evenResult);
    }
}
console.info(OddEven);
OddEven(num);

/*Documentation about this code:
https://docs.google.com/document/d/11mltUohmbsOksPwzgAkIWKShYyem58L2TMtWKpYcfx0/edit?usp=sharing */