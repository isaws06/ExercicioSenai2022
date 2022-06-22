totalSalario = 0 
n = 5 
for(i = 0; i < n; i++){
    let salario = Math.random()*10000
    totalSalario += salario
    console.log("I:", i+1, "salario: ", salario.toFixed(2));
}
media = totalSalario / n 
console.log("Média de salários: ", media.toFixed(2));

