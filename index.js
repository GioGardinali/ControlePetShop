const inquirer = require('inquirer');
const fs = require('fs');
const {INICIO,CADASTRO,BUSCAR} = require('./petShop');
const {results} = require('./pets.json');

function DadosPet(id, nome, animal, raca, dono){
    this.id = id,
    this.nome = nome,
    this.animal = animal,
    this.raca = raca,
    this.dono = dono
};

function createFile(objeto) {
    fs.readFile('./pets.json', 'utf-8', (err, dados) => {
            if (err) throw err;
        
            let petObj = JSON.parse(dados);
            petObj.results.push(objeto);
            
            
            fs.writeFile('./pets.json', JSON.stringify(petObj, null, 2), 'utf-8', err => {
                if (err) throw err;
                console.log('Cadastro realizado com sucesso!');
            });
    });
};


function buscar(pet){
    for(let nomePet in results){
        let {nome} = results[nomePet];

        if(pet == nome){
            console.table(results[nomePet]);
        }
    }
}

function id(){
    return results.length + 1;
};

function removeDuplicates(array) {
    let setArray = new Set(array);
    let noDuplicates = setArray.values();
    return Array.from(noDuplicates);
};


inquirer.prompt(INICIO).then(resposta =>{
    if(resposta.escolha == 0 ){
        inquirer.prompt(CADASTRO).then(resposta => {
            const novoPet = new DadosPet(id(), resposta.petNome, resposta.qualAnimal, resposta.raca, resposta.donoPet);
       
                createFile(novoPet);
            });
    };
    if(resposta.escolha == 1){
        let listaPet = [];
        for(let nomePet in results){
            let {nome} = results[nomePet];
            listaPet.push(`${nome}`);
        };

        inquirer.prompt([
            {
            type: 'list',
            name: 'lista_pets',
            message: 'Foram cadastrados os seguintes pets:',
            choices: removeDuplicates(listaPet)
            }
        ]).then(listaNom => {
            let procurarNome = listaNom.lista_pets;
            buscar(procurarNome);
        });
    };
    if (resposta.escolha == 2){
        inquirer.prompt(BUSCAR).then(listaNom => {
            let procurarNome = listaNom.buscarPet;
            buscar(procurarNome);
        }
    )};
});
