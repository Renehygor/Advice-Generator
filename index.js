// Passo 1 - pegar o botão 
// Passo 2 - criar evento de click do botão
// passo 3 - pegar elemento da descrição 
// Passo 4 - consultar a url da API usando fetch e transformando em json
// Passo 5 - mostrar o resultado trago pela API na descrição

const botao = document.querySelector("#botao")
const conselho = document.querySelector("#descricao")

botao.addEventListener("click", () => {
    trazerConselho()
});

async function buscarConselho() {
    const url = "https://api.adviceslip.com/advice";
    const resposta = await fetch(url); //fetch(url) → Faz uma requisição HTTP e retorna uma Promise.
    return await resposta.json();//.json() → Converte a resposta em JSON.
}

async function trazerConselho() {
    const resultado = await buscarConselho();
    const textoConselho = resultado.slip.advice.id;// caminho de busca do conselho
    descricao.textContent = textoConselho; // Aqui atualiza o conteúdo do elemento
}



