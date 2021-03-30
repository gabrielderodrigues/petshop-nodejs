let pessoa = {
  nome: 'Gabriel', 
  idade: 21,
  profissao: 'Desenvolvedor',
  habilidades: ['NodeJS', 'HTML', 'CSS', 'Javascript']
}

let { nome, idade } = pessoa;

console.log(`${nome}, ${idade} anos.`);