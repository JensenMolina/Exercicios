const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cadastrarAluno() {
    rl.question("Nome do aluno: ", (nome) => {
        rl.question("Idade: ", (idade) => {
            rl.question("Curso: ", (curso) => {
                
                let alunos = [];
                if (fs.existsSync('alunos.json')) {
                    alunos = JSON.parse(fs.readFileSync('alunos.json', 'utf-8'));
                }

                const novoAluno = {
                    id: alunos.length + 1,
                    nome: nome,
                    idade: Number(idade),
                    curso: curso
                };

                alunos.push(novoAluno);

                fs.writeFileSync('alunos.json', JSON.stringify(alunos, null, 2));

                console.log(`\nPronto! ${nome} foi cadastrado.`);
                
                rl.close(); 
            });
        });
    });
}

cadastrarAluno();
