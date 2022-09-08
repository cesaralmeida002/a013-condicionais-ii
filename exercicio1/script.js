//Crie um código que receba um número por **prompt** 
//e verifique se um número é divisível por 2 **ou** por 3

const num = Number(prompt("Digite seu número"))

if (num % 2 === 0) {
        console.log("O número É divisível por 2")        
    }else if (num % 3 === 0) {
            console.log("O número É divisível por 3")
    }else{
        console.log("O numero NÃO é divisível por 3")
    }        
/*
 2. Utilizando um operador lógico para unir 
 duas operações relacionais
```jsx
    if(expressao && expressao){ //&& para E
    //expressao || expressao para OU     
    
}   
*/
const num1 = Number(prompt("Digite um número."))

if(num1 % 2 === 0 && num1 % 3 === 0){  
    console.log("O numero é divisível por 2 e por 3")
}else if(num1 % 2 === 0 && num1 % 3 !== 0){
    console.log("O número é divisível por 2 e não por 3")    
}else if(num1 % 3 === 0 && num1 % 2 !== 0){
    console.log("O número é divisível por 3 e não por 2")    
} else if(num1 % 2 !== 0 && num1 % 3 !== 0){
    console.log("O número não é divisível por 3, nem por 2")
}
