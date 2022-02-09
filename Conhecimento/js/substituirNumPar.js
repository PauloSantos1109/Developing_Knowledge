let seqNumber = [1000,5000,60004,72295,11156,15641846,45464856,12486,41586783];

function substituirPar(seqNumber){
  for (let i = 0; i < seqNumber.length; i++) {
    if (!seqNumber) return 'Não é um Array'
    if (!seqNumber.length) return -1

    if (seqNumber[i] % 2 === 0) {
      console.log(`Vamos substituir ${seqNumber[i]} por 0`)
      seqNumber[i] = 0;
    }
    
  }
  return seqNumber
}


console.log(substituirPar(seqNumber))