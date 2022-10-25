// variaveis


//fracamente tipada

let idade = 26
let nome = "Milena Mansano"
let salario = Math.round(5.7)



console.log(`Tipo da variável => ${typeof idade}`)
console.log(`Tipo da variável => ${typeof nome}`)
console.log(`Tipo da variável => ${typeof salario}`)

console.log("==================== || ==================")

//escopo da variável

//contexto lexico, local onde a função é declarada

let variavelFoo = "bar"

function foo(params) {
    

    let variavelFoo ="foo";

    function bar(params) {
        

        console.log(` context => ${variavelFoo}`)
    }

    bar()

}

foo();

var variavelGlobal = "disponível em toda DOM"