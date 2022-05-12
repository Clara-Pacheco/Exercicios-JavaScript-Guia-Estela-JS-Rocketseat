let gastos_familiares = {
  receitas: [],
  despesas: []
}
let total_entradas = 0;
let total_gastos = 0;
let saldo_final = 0;

function saldoFinal(receitas,despesas){
  

  for(let receita of receitas){
    total_entradas =  total_entradas + receita;
  }

  
  for(let despesa of despesas){
    total_gastos = total_gastos + despesa;
  }

  saldo_final = total_entradas - total_gastos;

  return saldo_final;
}

let saldo = saldoFinal([50, 20, 30, 100], [10, 10, 20, 10]);
// saldo = saldoFinal([2500, 3200,250.43, 360.45], [320.34, 128.45, 176.87, 1450.00]);
// saldo = saldoFinal([100,50] ,[1, 1]);

if(saldo > 0){
  console.log(`O saldo final da família é positivo, no valor de R$${saldo.toFixed(2)}`);
}else {
  console.log(`O saldo final da família é negativo, no valor de - R$${saldo.toFixed(2)}`);
}