const busca = 'Bateria'

function getMusico(map){
  let banda = [];
  for ([key, value] of map) {
    if(value === busca){
      banda.push(key);
    }
  }
  return banda;
}
const membrosBanda = new Map();

membrosBanda.set('Paulo', 'Teclado');
membrosBanda.set('Rafael', 'Guitarra');
membrosBanda.set('Mateus', 'Baixo');
membrosBanda.set('Kauê', 'Bateria');
membrosBanda.set('Augusto', 'Violão');
membrosBanda.set('Ramon', 'Bateria');
membrosBanda.set('Viny', 'Guitarra');

console.log(getMusico(membrosBanda));