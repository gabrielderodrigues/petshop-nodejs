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
  var _animais = JSON.stringify(animais);
  fs.writeFileSync('database.json', _animais, 'utf-8');
}

const listarAnimais = () => {
  for(let animal of animais) {
    console.log(`${animal.nome}, ${animal.idade}`);
    console.log(animal.vacinado ? 'O animal já está vacinado.' : 'O animal ainda não foi vacinado.')
  }
}

listarAnimais();

const vacinarAnimais = (animal) => {
  if(!animal.vacinado) {
    animal.vacinado === true;
    console.log(`${animal.nome} acabou de ser vacinado.`);
  } else {
    console.log(`${animal.nome} foi vacinado anteriormente.`);
  }
}

const campanhaVacina = (animais) => {
  let animaisVacinados = animais.filter(animais => animais.vacinado === false);
  for(let animal of animais)
      vacinarAnimais(animal);
  console.log(`\nAnimais vacinados na campanha: ${animaisVacinados.length}.`);
  writeJson(database);
}

campanhaVacina(animais);

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

inserirCliente('Luiz', 'jumento', 'cabrobro', 5, 100, 'Alice', true, []);

console.log();
console.log(animais);

const darBanhoAnimal = (animal) => {
  if (!animal.servicos.includes('banho')) {
    animal.servicos.push('banho');
    console.log(moment().format("L - LTS"));
    console.log(`${animal.nome} está de banho tomado.`)
  } else {
    console.log(`${animal.nome} já tomou banho.`)
  }
}

console.log()
console.log("== BANHOS ==")
darBanhoAnimal(animais[1]);
darBanhoAnimal(animais[2]);
darBanhoAnimal(animais[4]);

const tosarAnimal = (animal) => {
  if (!animal.servicos.includes('tosa')) {
    animal.servicos.push('tosa');
    console.log(moment().format("L - LTS"));
    console.log(`${animal.nome} está tosado.`)
  } else {
    console.log(`${animal.nome} já foi tosado.`)
  }
}
console.log()
console.log("== TOSAR ==")
tosarAnimal(animais[1]);
tosarAnimal(animais[4]);
tosarAnimal(animais[3]);


const apararUnhasAnimal = (animal) => {
  animal.servicos.push({
    servico: "unha",
    data: moment().format("L - LTS")
  });
  console.log(`${animal.nome} está de unhas aparadas!`);
}

console.log()
console.log("== UNHAS ==")
apararUnhasAnimal(animais[1]);
apararUnhasAnimal(animais[4]);
apararUnhasAnimal(animais[3]);

const atenderCliente = (animal, servico) => {
  servico(animal);
  writeJson(database);
}

console.log()
console.log("== ATENDER CLIENTE ==")
atenderCliente(animais[0], apararUnhasAnimal);
atenderCliente(animais[1], apararUnhasAnimal);