function sendMessage() {
    const input = document.getElementById('userMessage');
    const messages = document.getElementById('messages');
    const userText = input.value;

    if (userText) {
        messages.innerHTML += `<div><strong>Você:</strong> ${userText}</div>`;
        input.value = '';

        // Simulação de resposta do bot
        setTimeout(() => {
            messages.innerHTML += `<div><strong>Alfred:</strong> Em que posso ajudar?</div>`;
            messages.scrollTop = messages.scrollHeight;
        }, 1000);
    }
}
