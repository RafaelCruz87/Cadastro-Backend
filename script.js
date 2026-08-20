const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const botaoCadastrar = document.getElementById('botao');
const divMensagem = document.getElementById('mensagem');

const regraTamanho = document.getElementById('regraTamanho');
const regraMaiuscula = document.getElementById('regraMaiuscula');
const regraNumero = document.getElementById('regraNumero');

inputSenha.addEventListener('input', () => {
    const senha = inputSenha.value;

    if (senha.length >= 8) {
        regraTamanho.textContent = '🟢 Pelo menos 8 caracteres';
        regraTamanho.style.color = '#16803c';
    } else {
        regraTamanho.textContent = '⚪ Pelo menos 8 caracteres';
        regraTamanho.style.color = '#555';
    }

    if (/[A-Z]/.test(senha)) {
        regraMaiuscula.textContent = '🟢 Pelo menos uma letra MAIÚSCULA';
        regraMaiuscula.style.color = '#16803c';
    } else {
        regraMaiuscula.textContent = '⚪ Pelo menos uma letra MAIÚSCULA';
        regraMaiuscula.style.color = '#555';
    }

    if (/[0-9]/.test(senha)) {
        regraNumero.textContent = '🟢 Pelo menos um número';
        regraNumero.style.color = '#16803c';
    } else {
        regraNumero.textContent = '⚪ Pelo menos um número';
        regraNumero.style.color = '#555';
    }
});

botaoCadastrar.addEventListener('click', () => {
    const nome = inputNome.value.trim();
    const email = inputEmail.value.trim();
    const senha = inputSenha.value;

    if (nome === '' || email === '' || senha === '') {
        divMensagem.innerHTML = '<p style="color: #d9534f; background-color: #f2dede; padding: 10px; border-radius: 8px;">Por favor, preencha todos os campos!</p>';
        return;
    }

    const temTamanho = senha.length >= 8;
    const temMaiuscula = /[A-Z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);

    if (!temTamanho || !temMaiuscula || !temNumero) {
        divMensagem.innerHTML = '<p style="color: #d9534f; background-color: #f2dede; padding: 10px; border-radius: 8px;">A senha não atende a todas as regras de segurança.</p>';
        return;
    }

    divMensagem.innerHTML = `
        <div class="sucesso">
            <h2>🎉 Cadastro Realizado com Sucesso!</h2>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>E-mail:</strong> ${email}</p>
        </div>
    `;
});
