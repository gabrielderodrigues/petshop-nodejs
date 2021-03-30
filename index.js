const moment = require('moment');
const fs = require('fs');
// Lê de forma sincrona o arquivo JSON através do modulo fs e converte em JS object
const database = JSON.parse(fs.readFileSync('./database.json'));
// Acessa o array de animas
const animais = database.animais;

const nomePetShop = "AvaPet"

// Atenção na hora de chamar essa funcao! O parâmetro passado deve ser db_pets para
// garantir a sobrescrita correta do arquivo json
const writeJson = (animais) => {
  // Converte o JS object atualizado em JSON e sobrescreve o db-pets.json de forma sincrona
  var _animais = JSON.stringify(animais, null, 2);
  fs.writeFileSync('database.json', _animais, 'utf-8');
}

const vacinarAnimais = (animal) => {
  let { vacinado, nome } = animal; 
  if(!vacinado) {
    vacinado = true;
    console.log(`${nome} acabou de ser vacinado.`);
  } else {
    console.log(`${nome} foi vacinado anteriormente.`);
  }
}

const campanhaVacina = (animais) => {
  let animaisVacinados = animais.filter(animais => animais.vacinado === false);
  for(let animal of animais)
      vacinarAnimais(animal);
  console.log(`\nAnimais vacinados na campanha: ${animaisVacinados.length}.`);
  writeJson(database);
}

// campanhaVacina(animais);

const inserirCliente = (nome, tipo, raca, idade, peso, dono, vacinado) => {
  newAnimal = {
    nome: nome,
    tipo: tipo,
    raca: raca,
    idade: idade,
    peso: peso,
    dono: dono,
    vacinado: vacinado,
    servicos: []
  }
  animais.push(newAnimal);
  writeJson(database);
};

// inserirCliente('Luiz', 'jumento', 'cabrobro', 5, 100, 'Alice', true, []);

//console.log();
//console.log(animais);

const darBanhoAnimal = (animal) => {
  const { servicos, nome } = animal;
  servicos.push({
    servico: 'banho',
    data: moment().format("L-LTS")
  })
  console.log(`${nome} já tomou banho.`)
}

// console.log()
// console.log("== BANHOS ==")
// darBanhoAnimal(animais[1]);
// darBanhoAnimal(animais[2]);
// darBanhoAnimal(animais[4]);

const tosarAnimal = (animal) => {
  const { servicos, nome } = animal;
  servicos.push({
    servico: "tosar",
    data: moment().format("L-LTS")
  });
    console.log(`${nome} já foi tosado.`)  
}

// console.log()
// console.log("== TOSAR ==")
// tosarAnimal(animais[1]);
// tosarAnimal(animais[4]);
// tosarAnimal(animais[3]);


const apararUnhasAnimal = (animal) => {
  const { servicos, nome } = animal;
  servicos.push({
    servico: "unha",
    data: moment().format("L - LTS")
  });
  console.log(`${nome} está de unhas aparadas!`);
} 


// console.log()
// console.log("== UNHAS ==")
// apararUnhasAnimal(animais[1]);
// apararUnhasAnimal(animais[4]);
// apararUnhasAnimal(animais[3]);

const atenderCliente = (animal, servico) => {
  servico(animal);
  writeJson(database);
}

// console.log()
// console.log("== ATENDER CLIENTE ==")
// atenderCliente(animais[0], apararUnhasAnimal);
// atenderCliente(animais[1], apararUnhasAnimal);

// Desafios metodos Array

// FOREACH
const listarAnimais = () => animais.forEach(function(animais, indice) {
  const { nome } = animais;
  console.log(`${indice+1}: ${nome}`)
})

listarAnimais();

// FILTER
const tipo = animal => animal.tipo === "cachorro";

console.log(animais.filter(tipo));


// FIND
const buscarAnimal = (nomeAnimal) => {
  let animalEncontrado = database.animais.find((animal) => {
    return animal.nome === nomeAnimal;
  })

  return animalEncontrado ? animalEncontrado : `Nenhum animal encontrado com o nome ${nomeAnimal}`;
}

console.log(buscarAnimal('Azure'))