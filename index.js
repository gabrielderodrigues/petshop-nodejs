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
  }
]

const listarPets = () => {
  for (let i=0;i<animais.length;i++) {
    console.log(animais[i].nome);
  }
}

listarPets();