# Como calcular tokens

Tokens são as unidades básicas de texto que modelos de linguagem, como o GPT, usam para processar informações. Um token pode ser uma palavra, parte de uma palavra ou até mesmo um símbolo de pontuação.

## O que é um token?
- Um token pode ser tão pequeno quanto um único caractere (como "a" ou ",") ou tão grande quanto uma palavra curta (como "chat").
- Palavras longas ou complexas podem ser divididas em vários tokens.

## Como os tokens são contados?
- O texto é dividido em tokens usando um algoritmo chamado "tokenização".
- Por exemplo, a frase "Olá, mundo!" pode ser dividida em tokens como: ["Olá", ",", "mundo", "!"]
- Cada token conta como uma unidade para o modelo.

## Exemplos práticos
- "Olá" → 1 token
- "Olá, mundo!" → 4 tokens (["Olá", ",", "mundo", "!"])
- "GPT-4 é incrível." → 6 tokens (["GPT", "-", "4", "é", "incrível", "."])

## Ferramentas para contar tokens
- OpenAI oferece ferramentas e bibliotecas para contar tokens, como o [tiktoken](https://github.com/openai/tiktoken) para Python.
- Você pode usar simuladores online ou APIs para verificar a contagem de tokens de um texto.

## Por que a contagem de tokens é importante?
- Modelos de linguagem têm limites de tokens por requisição (prompt + resposta).
- Saber quantos tokens seu texto possui ajuda a evitar cortes ou erros ao usar APIs.

## Referências
- [O que são tokens e como contar](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them)
- [Tiktoken - OpenAI](https://github.com/openai/tiktoken)

---

Este documento explica de forma simples como funciona a contagem de tokens em modelos de linguagem como o GPT.