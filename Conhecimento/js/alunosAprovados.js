//ATIVIDADE 1

const alunos =[
   {
      nome:'Thayná',
      nota:10,
      turma: 'b2'
   },

   {
      nome:'Thays',
      nota:4,
      turma: 'b2'
   },

   {
      nome:'Paulo',
      nota:6,
      turma: 'b2'
   }
];




function alunosAprovados(arr, media) {
   let aprovados = [];
   for (let i = 0; i < arr.length; i++) {
      const {nota, nome} = arr[i];
     if (nota >= media) {
        aprovados.push(nome)
     }      
   }
   return aprovados;
}

console.log(alunosAprovados(alunos,5))