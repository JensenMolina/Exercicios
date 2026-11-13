// Criar um array com nomes de times de futebol deve conter 8 times.
// Mostrar na tela, todos os nomes dos times.
// Mostrar na tela, a quantidade de time no array.
// Adicionar um novo time chamado "Flamengo".
// Adicionar um novo time na primeira posição, chamado Santos.
// Alterar o time, chamado "Flamengo", para COrinthias.

let times = ["Palmeiras", "São Paulo", "Vasco", "Fluminense", "Cruzeiro", "Grêmio", "Internacional", "Atlético Mineiro"];

console.log(times);
console.log(times.length);

times.push("Flamengo");
console.log(times);

times.unshift("Santos");
console.log(times);

times[9] = "Corinthians";

console.log(times);
console.log(times.length);