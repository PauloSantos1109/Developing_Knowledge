const meuArray = [30, 30, 40, 5, 223, 2049,3034,5];

function valoresUnicos(arr){
  const mySet = new Set(arr);


  return [...mySet];
}

console.log(valoresUnicos(meuArray));

//Para retornar o meuArray em um outro Array precisa dar um spred
// para isso foi retornado [...mySet]