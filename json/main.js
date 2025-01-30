const TODOS = [
    {
        id: 1,
        descricao: "Estudar programacao",
        foiCompletado: false
    },
    {
        id: 2,
        descricao: "Comer",
        foiCompletado: true
    },
    {
        id: 3,
        descricao: "Dormir",
        foiCompletado: false
    }
]

//Transforma um objeto ou lista de objetos em JSON
const todosJSON = JSON.stringify(TODOS);
console.log(todosJSON);

//Transforma um JSON em um objeto ou lista de objetos
const todosList = JSON.parse(todosJSON);
console.log(todosList);