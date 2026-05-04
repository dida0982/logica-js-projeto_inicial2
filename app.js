//1 Criar uma função que exibe "Olá, mundo!" no console.

//2 Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

//3 Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

//4 Criar uma função que recebe três números como parâmetros e retorna a média deles.

//5 Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

//6 Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo


// test 1 e 2
// function lookYouConsole (  )
// {
//     let name = prompt(`What your name?`)
//     console.log(`Hello ${name}!`)
// }

// lookYouConsole();

// test 3
// function theDoubleOfNumber() {
//     let number1 = Number( prompt( `Enter a number:` ));
//     let number2 =  number1 * 2;

//     console.log(`The double of ${number1} is ${number2}`);
// }

// theDoubleOfNumber()

// test 4

// function averageOfTheNumbers() {
//     let number1 = Number(prompt( `Enter a number.` ));
//     let number2 = Number(prompt( `Enter another number.` ));
//     let number3 = Number( prompt( `Enter another number.` ) );
//     let average = (number1 + number2 + number3) / 3;
//     console.log(`The average of '${number1}', '${number2}', '${number3}' is ${ parseInt(average)} `);

// }

// averageOfTheNumbers();

//test 5: add a function that takes two numbers as parameters and return the larger one

// console.log(`Return largest number.`);

// function returnsLargestNumber ()
// {
//     let number1 = Number( prompt( `Enter a  number.` ) );
//     let number2 = Number( prompt( `Enter another number.` ) );

//     if ( number1 > number2 )
//     {
//         console.log( `Between ${number1} and ${number2}, the larger number is ${number1}.` );
//     }
//     if (number1 < number2) {
//         console.log( `Between ${number2} and ${number1}, the larger number is ${number2}.` );
//     }
// }

// returnsLargestNumber();

// function returnsLargestNumber(number1, number2) {
//     if (number1 > number2) {
//         return number1;
//     } else {
//         return number2;
//     }
// }

// // exemplo de uso
// let result = returnsLargestNumber(10, 20);
// console.log(result);


//Number( test 6 | Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.

function multiplicationOfNumbers() {
    let number = Number(prompt( `Enter a number.` ));
    let result = number * number;
    console.log(`The multiplication of the number ${number} by itself is: ${result}`);
}

multiplicationOfNumbers();
