// Passo 1 - pegar o botão 
// Passo 2 - criar evento de click do botão
// passo 3 - pegar elemento da descrição 
// Passo 4 - fazer validação com try e catch cosa tenho algo errado
// Passo 5 - consultar a url da API usando fetch e transformando em json
// Passo 6 - mostrar o resultado trago pela API na descrição


//resultado do desafio feito por mim 

// botao.addEventListener("click",() =>{
//     buscarConselho()
// } );

// async function buscarConselho() {
//     const url = "https://api.adviceslip.com/advice";
//     const resposta = await fetch(url); //fetch(url) → Faz uma requisição HTTP e retorna uma Promise.
//     return await resposta.json();//.json() → Converte a resposta em JSON.
// }

// async function trazerConselho() {
//     const resultado = await buscarConselho();
//     const textoConselho = resultado.slip.advice.id;// caminho de busca do conselho
//     descricao.textContent = textoConselho; // Aqui atualiza o conteúdo do elemento
// }


//Correção
const botao = document.querySelector("#botao");
const numeroConselho = document.querySelector("#titulo")
const conselho = document.querySelector("#descricao");

async function getAdvice() {
    try {

        const response = await fetch("https://api.adviceslip.com/advice");

        if (!response.ok) {
            throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
        }

        const conteudoConselho = await response.json();
        const numeroTitulo = `Advice #${conteudoConselho.slip.id}`;
        const textoConselho = `"${conteudoConselho.slip.advice}"`;

        numeroConselho.innerText = numeroTitulo;
        conselho.innerText = textoConselho;

    } catch (error) {
        console.error("Erro ao tentar buscar as informações da API", error);
    }

}

botao.addEventListener("click", getAdvice);
getAdvice();