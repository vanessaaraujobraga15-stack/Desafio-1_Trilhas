// Função principal chamada ao clicar no botão
function simularCompra() {
    // Preços definidos na página
    const precoCaderno = 20.00;
    const precoCaneta = 5.00;
    const precoMochila = 80.00;

    // Função auxiliar para validar a entrada do usuário
    function obterQuantidade(nomeProduto) {
        let entrada = prompt(`Quantas unidades de ${nomeProduto} você deseja?`);
        
        // Se o usuário clicar em "Cancelar", encerra o fluxo
        if (entrada === null) return null; 
        
        // Converte a entrada para número
        let qtd = Number(entrada);
        
        // Valida se o que foi digitado é um número inteiro válido e não negativo
        while (isNaN(qtd) || !Number.isInteger(qtd) || qtd < 0 || entrada.trim() === "") {
            entrada = prompt(`Entrada inválida. Digite apenas números inteiros (ex: 0, 1, 2) para ${nomeProduto}:`);
            if (entrada === null) return null;
            qtd = Number(entrada);
        }
        return qtd;
    }

    // Coleta as quantidades
    let qtdCaderno = obterQuantidade("Caderno");
    if (qtdCaderno === null) return; // Cancela a simulação se for null

    let qtdCaneta = obterQuantidade("Caneta");
    if (qtdCaneta === null) return;

    let qtdMochila = obterQuantidade("Mochila");
    if (qtdMochila === null) return;

    // Verifica se todas as quantidades são zero
    if (qtdCaderno === 0 && qtdCaneta === 0 && qtdMochila === 0) {
        alert("Nenhum produto foi selecionado. A simulação foi cancelada.");
        return;
    }

    // Calcula os subtotais e o total
    let totalCaderno = qtdCaderno * precoCaderno;
    let totalCaneta = qtdCaneta * precoCaneta;
    let totalMochila = qtdMochila * precoMochila;
    let valorTotal = totalCaderno + totalCaneta + totalMochila;

    // Formata e exibe o resumo da compra no alert
    let mensagem = "TRILHAS PAPELARIA — RESUMO DA COMPRA\n\n";
    mensagem += `Caderno: ${qtdCaderno} un. — R$ ${totalCaderno.toFixed(2).replace('.', ',')}\n`;
    mensagem += `Caneta: ${qtdCaneta} un. — R$ ${totalCaneta.toFixed(2).replace('.', ',')}\n`;
    mensagem += `Mochila: ${qtdMochila} un. — R$ ${totalMochila.toFixed(2).replace('.', ',')}\n\n`;
    mensagem += `TOTAL A PAGAR: R$ ${valorTotal.toFixed(2).replace('.', ',')}`;

    alert(mensagem);
}