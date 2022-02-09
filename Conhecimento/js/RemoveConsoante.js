let texto = 'Paulo lindo';
function disemvowel(str) {
 
  let conso = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      i = i++
    }else{
      conso[i] = str[i];
    }

  }  
  return conso.join('');
}

console.log(disemvowel(texto.toLocaleLowerCase()))
