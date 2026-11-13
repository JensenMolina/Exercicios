const readline = require("readline")
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function menuPrincipal() {
    console.log("Voltando para o menu principal")
    entrada.close()
}


function menuAluno(){
    console.clear()
    console.log("==========================")
    console.log("Sistema cadastro Alunos")
    console.log("==========================")
    console.log("1. Cadastro")
    console.log("==========================")
    console.log("2. Listar")
    console.log("==========================")
    console.log("3. Excluir")
    console.log("==========================")
    console.log("0. Voltar")
    console.log("==========================")

    entrada.question("Escolha uma opção: ", function(opcao){
        switch(parseInt(opcao)){
            case 1:
                console.log("Você escolheu cadastro")
                break;
            case 2:
                console.log("Você escolheu listar")
                entrada.close()
                break;
            case 3:
                console.log("Você escolheu excluir")
                entrada.close()
                break;
            case 0:
                console.log("Você escolheu Voltar")
                menuPrincipal()
                break;
            default:
                console.log("Opção inválida")
                entrada.close()
                menuAluno()
                break;
        }
    })
}


menuAluno()
