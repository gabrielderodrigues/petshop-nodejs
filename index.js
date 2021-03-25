const nomePetShop = "AvaPet";

let animais = [
  {
    nome: 'Azure',
    tipo: 'cachorro',
    raca: 'labrador',
    idade: 2,
    peso: 15,
    dono: 'Gabriel',
    vacinado: true,
    servicos: ['banho', 'tosa']
  },
  {
    nome: 'Jack',
    tipo: 'gato',
    raca: 'viragato',
    idade: 5,
    peso: 8,
    dono: 'Gabriel',
    vacinado: true,
    servicos: ['banho', 'tosa']
  },
  {
    nome: 'Flintcher',
    tipo: 'cavalo',
    raca: 'manga-larga marchador',
    idade: 5,
    peso: 300,
    dono: 'Gabriel',
    vacinado: false,
    servicos: ['banho', 'tosa']
  },
  {
    nome: 'Hugito',
    tipo: 'gato',
    raca: 'gatito',
    idade: 2,
    peso: 7,
    dono: 'Gabriel',
    vacinado: false,
    servicos: ['banho', 'tosa']
  },
  {
    nome: 'Rock',
    tipo: 'gato',
    raca: 'gatito',
    idade: 1,
    peso: 7,
    dono: 'Gabriel',
    vacinado: true,
    servicos: ['banho', 'tosa']
  }
  ,{
    nome: 'Vindisel',
    tipo: 'cachorro',
    raca: 'viralata',
    idade: 5,
    peso: 15,
    dono: 'Gabriel',
    vacinado: false,
    servicos: ['banho', 'tosa']
  }
]

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

function campanhaVacina() {
  console.log("===== VACINA =====")
  let animaisVacinados = 0;
  for (let animal of animais) {
    if (!animal.vacinado) {
      animaisVacinados++;
      vacinarPet(animal);
    }
  }; 
  console.log(`${animaisVacinados} foram vacinados!`)
};

campanhaVacina();

function inserirCliente(nome, tipo, raca, idade, peso, dono, vacinado) {
  newAnimal = {
    nome: nome,
    tipo: tipo,
    raca: raca,
    idade: idade,
    peso: peso,
    dono: dono,
    vacinado: vacinado
  }

  animais.push(newAnimal);
}

inserirCliente('Luiz', 'jumento', 'cabrobro', 5, 100, 'Alice', true)

console.log(animais)