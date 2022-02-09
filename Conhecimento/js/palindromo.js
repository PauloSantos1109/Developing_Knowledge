let string = "Ana";


function palindromo(palavra){
  let arr = palavra;
  let arrs = [];
  
  for (let i = 0; i < arr.length; i++) {
    
    arrs[i] = arr[i]
      
    
  }
  arrs = arrs.reverse().join(""); 

  if (arrs !== arr) {
    return false
  }
  return true
  

}

console.log(palindromo(string.toLocaleLowerCase()));