const readline = require('readline');

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function menuPrincipal(){
    console.clear()
    console.log("=============================")
    console.log("Sistema de Cadastro Escolar")
    console.log("=============================")
    console.log("1. Alunos")
    console.log("=============================")
    console.log("2. Professores")
    console.log("=============================")
    console.log("0. Sair")
    console.log("=============================")
    
    entrada.question("Escolha uma opção: " , function(opcao){
        switch(parseInt(opcao)){
            case 1:
                console.log("Você escolheu a opção aluno");
                entrada.close(); 
                break;
            case 2:
                console.log("Você escolheu a opção professores");
                entrada.close();
                break;
            case 0:
                console.log("Você escolheu sair");
                entrada.close();
                break;
            default:
                console.log("Você escolheu uma opção inválida");
                menuPrincipal()
               
        }
    });
}

menuPrincipal();
