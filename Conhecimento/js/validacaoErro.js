// Crie uma função que recebe um array e um número

let arr = 0;
let exten =0;

function validadorErro(arr,number){
  try {
    if (!arr || !number) {
      throw new ReferenceError('Existe valores não declarados');
    }
    
    if (typeof arr !== 'object' ) {
      throw new TypeError(`Esse valor é ${typeof arr} sendo assim não é valido`);
    }
  
    if (typeof number !==  'number') {
      throw new TypeError(`Esse valor é ${typeof number} sendo assim não é valido`);
    }
  
    if (arr.length !==  number) {
      throw new RangeError('O valor é diferente do estipulado.');
    }
  
    return 'Tudo certo por aqui';
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log('Inclua os paramentros');
      console.log(e.message)
    }else if (e instanceof ReferenceError) {
      console.log( 'Inclua os paramentros');
      console.log(e.message)
    }else if (e instanceof TypeError){
      console.log( 'Os valores estão invalidos');
      console.log(e.message)
    }else if (e instanceof RangeError) {
      console.log( 'O valor esta incorreto com estipulado');
      console.log(e.message)
    }else{
      return 'erro não programado'
    }   
  }
}

console.log(validadorErro(arr, exten));