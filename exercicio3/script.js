//código a ser reescrito

/*
if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}
*/
let nome = prompt("Digite seu nome").toLowerCase()
	console.log(nome === "jose" ? "Oi Zé" : " Oi," + nome)

/*
if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}
*/
let idade = Number(prompt("Digite sua idade"))
	console.log(idade >= 18 ? "Pode tirar a habilitação" : "Não pode tirar a habilitação")