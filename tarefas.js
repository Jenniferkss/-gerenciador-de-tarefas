let tarefas = [
  "Estudar JavaScript",
  "Fazer exercícios de matemática",
  "Lavar a louça",
  "Comprar mercado",
  "Ir à academia",
  "Ler um livro",
  "Fazer revisão para o teste",
  "Limpar o quarto",
  "Estudar para concurso",
  "Organizar o computador",
];
//Adiciona novas tarefas
tarefas.push(`Estudar para provas`,`Preparar lancheira`);
console.table(`Lista de tarefas${tarefas}`);


// Remove última tarefa
let tarefaRemovida = tarefas.pop();
console.log(`Tarefa removida: ${tarefaRemovida}`);


//Adiciona tarefa no início
tarefas.unshift(`Regar a planta`);
console.log(`Nova tarefa no inicio: ${tarefas}`);


// Remove primeira tarefa
tarefas.shift();
console.log(`Primeira tarefa removida ${tarefas}`);


