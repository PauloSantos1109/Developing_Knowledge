/* [4,7,11,13,21,24,27]; */

const keyWolds = 'LIFE IS NOT A PROBLEM TO BE SOLVED';
const num = 3;

 
function checkWords(wold,num){
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr[i] = wold[i];    
  }

  return arr.join('')
}


console.log(checkWords(keyWolds.split(''),num));

