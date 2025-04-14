
const botao = document.querySelector("#botao");
const numeroConselho = document.querySelector("#titulo")
const conselho = document.querySelector("#descricao");

async function getAdvice() {
    try {

        const response = await fetch("https://api.adviceslip.com/advice");

        if (!response.ok) {
            throw new Error("Ocorreu um ERRO ao tentar buscar as informações da API");
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