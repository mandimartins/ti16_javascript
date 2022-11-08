//executa o código logo após o carregamento completo da página
window.onload = function () {
    //traz todas as linhas da tabela
    const linhasTabela = document.querySelectorAll(".linha-tabela");

    linhasTabela.forEach((linha) => {

        // linha.children[0] Nome
        // linha.children[1] Peso
        // linha.children[2] Altura
        // linha.children[3] Gordura Corporal
        // linha.children[4] IMC

        // linha.children[0].innerHTML Pegar o conteúdo da tag filha

        let altura = parseFloat(linha.children[1].innerHTML)
        let peso = parseFloat(linha.children[2].innerHTML)

        let IMC = calcularIMC(altura, peso)

        //adiciona o resultado na celula IMC
        linha.children[4].innerHTML = IMC

    });

    function calcularIMC(peso, altura){
        return (parseInt(peso) / parseInt(altura)^2).toFixed(2)
    }

    const enviarBtn = document.getElementById('enviar')

    enviarBtn.addEventListener("click", (event) => {
        event.preventDefault();
        let formulario = document.getElementById('formulario')

        let tabela = document.getElementById('tabela');

        let backupTabela = tabela.innerHTML

        let imc = calcularIMC(formulario.altura.value, formulario.peso.value);

        let novaLinha = `
                        <tr class="linha-tabela">
                            <th scope="row">${formulario.nome.value}</th>
                            <td>${formulario.peso.value}</td>
                            <td>${formulario.altura.value}</td>
                            <td>${formulario.gordura.value}</td>
                            <td>${calcularIMC(formulario.peso.value,formulario.altura.value)}</td>
                        </tr>
        `
        tabela.innerHTML = backupTabela + novaLinha;

        formulario.nome.value = ""
        formulario.peso.value = "";
        formulario.altura.value = "";
        formulario.gordura.value ="";
    })


}