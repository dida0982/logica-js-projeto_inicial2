//1 Criar uma função que exibe "Olá, mundo!" no console.

//2 Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

//3 Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

//4 Criar uma função que recebe três números como parâmetros e retorna a média deles.

//5 Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

//6 Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo


function sumOfNumbers() {
    let number1 = Number( prompt( `Enter a number:` ));
    let number2 = Number( prompt( `Enter another number:` ));
    let number3 =  number1 + number2;

    console.log(`${number1} + ${number2} = ${number3}`);
}

sumOfNumbers()
