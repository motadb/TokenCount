
function tokenize(text) {
    // Usa o gpt-tokenizer se disponível
    if (window.GPTTokenizer) {
        const tokenizer = new window.GPTTokenizer.GPTTokenizer();
        return tokenizer.encode(text);
    } else {
        // Fallback simples
        return text.match(/\w+|[^\w\s]/g) || [];
    }
}

const inputText = document.getElementById('inputText');
const tokenCount = document.getElementById('tokenCount');

inputText.addEventListener('input', function() {
    const tokens = tokenize(inputText.value);
    tokenCount.textContent = `Tokens: ${tokens.length}`;
    // Feedback visual animado
    tokenCount.style.background = '#b8e994';
    tokenCount.style.color = '#218c74';
    tokenCount.style.transition = 'background 0.2s, color 0.2s';
    setTimeout(() => {
        tokenCount.style.background = '#eafaf1';
        tokenCount.style.color = '#218c74';
    }, 180);
});