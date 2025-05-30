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

// Verifica existência de tarefa
console.log(`A lista possui Ir à academia? ${tarefas.includes("Ir à academia")}`);

//Transforma a lista de tarefas em string
console.log(`Lista como string: ${tarefas.join(`,`)}`);

//Extrai parte da lista
console.log(`Parte da lista (indices 2 a 4): ${tarefas.slice(2,5)}`);

// Altera lista
let tarefasRemovidas = tarefas.splice(3,1);
console.log(`Tarefas removidas:${tarefasRemovidas}`);
tarefas[3] = "Passear com o cachorro"
console.log(`Lista após a substituiçaõ: ${tarefas}`);

// Concatena listas de tarefas 
let tarefas2 = [`Arrumar mala`,`Fazer a janta`,`Lavar o carro`]
console.log(`Listas combinasdas: ${tarefas.concat(tarefas2)}`);

// Transforma tarefas
let clone = tarefas.map(tarefas => "Fazer:" + tarefas)
console.table(`Clonagem com map: ${clone}`);

//Filtra tarefas
let tarefasFiltradas = tarefas.filter( tarefas => tarefas.length > 15 );
console.log(`Lista de tarefas filtradas:${tarefasFiltradas}`);
