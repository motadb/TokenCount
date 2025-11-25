
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
const modelSelect = document.getElementById('modelSelect');
const priceEstimate = document.getElementById('priceEstimate');

// Preços aproximados por 1k tokens (USD)


const modelPrices = {
    "gpt-4o": { input: 0.0025, output: 0.01 },
    "gpt-4.1": { input: 0.002, output: 0.008 },
    "gpt-4.1-mini": { input: 0.0004, output: 0.0016 },
    "gpt-4.1-nano": { input: 0.0001, output: 0.0004 },
    "gpt-4.5": { input: 0.075, output: 0.15 },
    "gpt-4o-mini": { input: 0.00015, output: 0.0006 },
    "o3": { input: 0.01, output: 0.04 },
    "o3-mini": { input: 0.0011, output: 0.0044 },
    "o1": { input: 0.015, output: 0.06 },
    "mistral-large-2": { input: 0.000003, output: 0.000009 },
    "pixtral-large": { input: 0.000002, output: 0.000006 },
    "llama-3-3-70b": { input: 0.00059, output: 0.00079 },
    "gemini-2-5-pro": { input: 0.0025, output: 0.015 },
    "gemini-2-0-flash": { input: 0.0001, output: 0.0004 },
    "gemini-1-5-pro": { input: 0.00125, output: 0.005 },
    "deepseek-v3": { input: 0.00014, output: 0.00028 },
    "cohere-command-a": { input: 0.0025, output: 0.01 },
    "claude-opus-4-1": { input: 0.015, output: 0.075 },
    "claude-sonnet-4": { input: 0.003, output: 0.015 },
    "amazon-nova-micro": { input: 0.000035, output: 0.00014 },
    "amazon-nova-pro": { input: 0.0008, output: 0.0032 }
};

// Taxa de câmbio USD para EUR (atualize conforme necessário)
const usdToEur = 0.92;



function updateEstimate() {
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

    // Cálculo do preço estimado para input/output
    const model = modelSelect.value;
    const prices = modelPrices[model] || { input: 0, output: 0 };
    const estimatedInputUsd = ((tokens.length / 1000) * prices.input);
    const estimatedOutputUsd = ((tokens.length / 1000) * prices.output);
    const estimatedInputEur = estimatedInputUsd * usdToEur;
    const estimatedOutputEur = estimatedOutputUsd * usdToEur;
    priceEstimate.textContent = `Preço estimado (input): US$ ${estimatedInputUsd.toFixed(4)} | € ${estimatedInputEur.toFixed(4)}\nPreço estimado (output): US$ ${estimatedOutputUsd.toFixed(4)} | € ${estimatedOutputEur.toFixed(4)}`;
}

inputText.addEventListener('input', updateEstimate);
modelSelect.addEventListener('change', updateEstimate);

// Inicializa ao carregar
updateEstimate();