// Crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima -   A
// * entre 80 - 89   -   B
// * entre 70 - 79   -   C
// * entre 60 - 69   -   D
// * menor que 60    -   F

function obterNota(nota){

  if(nota >= 90 && nota <=100){
    alert('Sua nota foi A');
  }else if(nota >= 80 && nota <= 89){
    alert('Sua nota foi B');
  }else if(nota >= 70 && nota <= 79){
    alert('Sua nota foi C');
  }else if(nota >= 60 && nota <= 69){
    alert('Sua nota foi D');
  }else if(nota < 60 && nota >= 0){
    alert('Sua nota foi F');
  }else{
    alert('Nota inválida!')
  }
}

console.log(obterNota(0));
console.log(obterNota(-5));
console.log(obterNota(26));
console.log(obterNota(99));
console.log(obterNota(63));
console.log(obterNota(48));
console.log(obterNota(72));
console.log(obterNota(54));
console.log(obterNota(12));
console.log(obterNota(101));
console.log(obterNota(89));
console.log(obterNota(35));
console.log(obterNota(59));

