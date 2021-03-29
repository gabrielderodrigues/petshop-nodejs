var moment = require('moment');

const fs = require('fs');

const nomePetShop = "AvaPet";

// const animais = require('./dataBase.json')

const animais = JSON.parse(fs.readFileSync('./database.json'));

const WriteJson = (animais) => {
  // Converte o JS object atualizado em JSON e sobrescreve o db-pets.json de forma sincrona
  var _animais = JSON.stringify(animais);
  fs.writeFileSync('database.json', _animais);
}

const listarPets = () => {
  for (let i=0;i<animais.length;i++) {
    console.log(animais[i].nome);
  }
}

listarPets();

console.log()

const vacinarPet = (animais) => {
  if (!animais.vacinado) {
    animais.vacinado = true;
    console.log(`O ${animais.nome} acabou de ser vacinado!`);
  } else {
    console.log(`O ${animais.nome} já está vacinado!`);
  };
};

const campanhaVacina = (animais) => {
  animaisVacinados = animais.filter(animais => animais.vacinado === false);
  for(let animal of animais)
      vacinarPet(animal);
  console.log(`\nAnimais vacinados na campanha: ${animaisVacinados.length}.`);
  WriteJson(animais);
}

campanhaVacina();

function inserirCliente(nome, tipo, raca, idade, peso, dono, vacinado) {
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
  WriteJson(animais);
}

inserirCliente('Luiz', 'jumento', 'cabrobro', 5, 100, 'Alice', true)

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
  if (!animal.servicos.includes('tosar')) {
    animal.servicos.push('tosar');
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
  if (!animal.servicos.includes('aparar unhas')) {
    animal.servicos.includes('aparar unhas');
    console.log(moment().format("L - LTS"));
    console.log(`${animal.nome} está de unhas aparadas.`)
  } else {
    console.log(`${animal.nome} já teve as unhas aparadas.`)
  }
}

console.log()
console.log("== UNHAS ==")
apararUnhasAnimal(animais[1]);
apararUnhasAnimal(animais[4]);
apararUnhasAnimal(animais[3]);

const atenderCliente = (animais, servico) => {
  servico(animais);
  WriteJson(animais);
};

atenderCliente(animais[1], darBanhoAnimal);