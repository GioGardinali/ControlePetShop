
const INICIO = [
    {
        name: 'escolha',
        type: 'list',
        message:'Escolha o que deseja fazer!',
        choices: [
            {
                name: 'Cadastrar novo pet',
                value: 0
            },
            {
                name: 'Listar todos os pets cadastrados',
                value: 1
            },
            {
                name: 'Buscar pet por nome',
                value: 2
            }
        ]
    }
];

const CADASTRO = [

    {
        name: 'petNome',
        type: 'input',
        message: 'qual é o nome do pet?'
    },
    {
        name: 'qualAnimal',
        type: 'list',
        message: 'O seu pet é um ...',
        choices: [
            {
                name:'Cachorro',
                value: 0
            },
            {
                name:'Gato',
                value: 1
            },
            {
                name:'Ave',
                value: 2
            },
            {
                name: 'Outro',
                value: 3}
            ]
    },            
    {
        name: 'raca',
        type:'input',
        message: 'Qual é a raça?'
    },
    {
        name: 'donoPet',
        type: 'input',
        message: 'Qual é o nome do dono do Pet?'
    },
    
];

const BUSCAR = [
    {
        name: 'buscarPet',
        type: 'input',
        message: 'Qual é o nome que você quer procurar?'
    }
]

module.exports = {INICIO, CADASTRO, BUSCAR};

//function removeDuplicates(array) {
  //  let setArray = new Set(array);
   // let noDuplicates = setArray.values();
  //  return Array.from(noDuplicates);
//};
