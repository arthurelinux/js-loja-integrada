# Padronização do footer — Loja Integrada

Este guia transforma o `README.md` do pacote final em um procedimento de publicação no painel da Loja Integrada.

> O painel da Loja Integrada precisa ser acessado manualmente. Os passos abaixo não devem ser executados apenas colando todos os códigos de uma vez: faça backup, aplique por área e valide cada etapa.

## Resultado esperado

- O mesmo footer aparece na home, no carrinho, no blog e nas páginas internas.
- O comportamento mobile é igual em todas as páginas.
- Existe apenas um script responsável pelo footer: o script nativo da Loja Integrada, complementado pelos arquivos externos do pacote final.
- O layout 2026 continua ativo sem consultar ou alterar `#rodape`.

## 1. Fazer backup

Antes de alterar o painel, copie para um arquivo local ou documento de backup:

- CSS global atual;
- HTML/CSS personalizado;
- JavaScript do cabeçalho e do rodapé;
- JavaScript da home;
- códigos `JS_Rodape_MIN.js`, `footer-sodre.js`, `JS_Codex_Layout_2026.js` e `JS_Razao_Social.js`, caso estejam publicados no painel.

Não apague os arquivos do repositório. A remoção desta etapa é apenas dos carregamentos antigos no painel.

## 2. Limpar o CSS global

No CSS global atual, mantenha todo o restante e apenas remova ou comente os blocos que contenham:

- `S26FOOTER_MOBILE_BG_20260729`;
- `SODRÉ — CORREÇÕES FINAIS MOBILE: FOOTER`;
- regras finais de `#rodape.s26-footer` adicionadas durante os testes.

Depois do CSS global, no campo HTML/CSS do painel, carregue:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/arthurelinux/js-loja-integrada@main/pacote-final-loja-integrada/sodre-footer.css?v=1">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/arthurelinux/js-loja-integrada@main/pacote-final-loja-integrada/sodre-footer-universal.css?v=1">
```

Os dois arquivos devem ser carregados na home e também nas páginas internas.

## 3. Padronizar o JavaScript do footer

No JavaScript do rodapé:

1. Remova `JS_Rodape_MIN.js`.
2. Remova `footer-sodre.js` e qualquer cópia antiga que recrie o footer.
3. Mantenha o carregamento original/nativo da Loja Integrada.
4. Como último script, acrescente:

```html
<script src="https://cdn.jsdelivr.net/gh/arthurelinux/js-loja-integrada@main/pacote-final-loja-integrada/sodre-footer.js?v=1"></script>
```

O script final aguarda o footer nativo terminar de carregar e organiza os elementos existentes. Não carregue `footer-sodre.js`, `sodre-about.css` ou `JS_Rodape_MIN.js` para esta finalidade.

## 4. Desativar scripts que conflitam

Para esta correção do footer, não recarregue no painel:

- `JS_Codex_Layout_2026.js` inline;
- `JS_Razao_Social.js`.

O primeiro excede o limite do painel e o segundo injeta regras mobile que podem sobrescrever o footer.

## 5. Publicar o layout 2026 sem tocar no footer

Substitua o conteúdo inline de `JS_Codex_Layout_2026.js` pelo carregamento externo:

```html
<script src="https://cdn.jsdelivr.net/gh/arthurelinux/js-loja-integrada@820fb15/pacote-final-loja-integrada/JS_Codex_Layout_2026_SEM_FOOTER.js"></script>
```

Se a rotação automática e o card de postagens reduzido no mobile forem necessários, carregue depois dele:

```html
<script src="https://cdn.jsdelivr.net/gh/arthurelinux/js-loja-integrada@2c91f97/pacote-final-loja-integrada/sodre-blog-mobile.js"></script>
```

## 6. Conferir os cards da home

No HTML da home, mantenha somente:

```html
<script src="https://cdn.jsdelivr.net/gh/arthurelinux/js-loja-integrada@main/home-card.js?v=final"></script>
```

Não carregue simultaneamente versões antigas de `home-card.js`, `sodre-cards.css` ou `sodre-mobile.css`.

## 7. Salvar e limpar o cache

Salve cada área do painel. Abra uma janela anônima ou faça uma recarga forçada para evitar que CSS e JavaScript antigos permaneçam no cache.

## 8. Validar em todas as páginas

Teste pelo menos:

- home: `/`;
- carrinho: `/carrinho/index`;
- blog: `/pagina/blog.html`;
- uma página interna de conteúdo.

Em cada página, valide as larguras de **320, 360, 390 e 430 px** e depois o desktop.

Confira:

- footer aparece uma única vez;
- colunas, contatos, redes sociais e certificações estão presentes;
- selos de pagamento não ficam cortados nem sobrepostos;
- não há rolagem horizontal;
- o footer mobile mantém a mesma ordem e espaçamento;
- o blog e o carrinho não carregam um footer visualmente diferente;
- não existem ícones duplicados nem conteúdo recriado.

## 9. Checklist final

- [ ] Backup dos códigos antigos concluído.
- [ ] Blocos antigos de CSS do footer removidos/comentados.
- [ ] `sodre-footer.css` carregado depois do CSS global.
- [ ] `sodre-footer-universal.css` carregado na home e páginas internas.
- [ ] Script nativo do footer mantido.
- [ ] `sodre-footer.js` carregado por último.
- [ ] `footer-sodre.js`, `JS_Rodape_MIN.js` e `sodre-about.css` não estão carregados.
- [ ] Layout 2026 trocado pela versão `SEM_FOOTER` externa.
- [ ] `JS_Razao_Social.js` não está sobrescrevendo o footer.
- [ ] Apenas uma versão de `home-card.js` está ativa.
- [ ] Testes concluídos em 320, 360, 390, 430 px e desktop.

## Alternativa experimental: footer independente

Se o footer nativo continuar variando entre páginas, teste a versão independente do pacote. Ela não usa Vue: no mobile, clona o conteúdo do `#rodape` nativo — preservando os mesmos itens, imagens, logo e selos reais — e cria um novo elemento `#sodre-footer-root`. No desktop, preserva o footer nativo.

Carregue o CSS e, por último, o JavaScript em todas as páginas:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/arthurelinux/js-loja-integrada@main/pacote-final-loja-integrada/sodre-footer-standalone.css?v=1">
<script src="https://cdn.jsdelivr.net/gh/arthurelinux/js-loja-integrada@main/pacote-final-loja-integrada/sodre-footer-standalone.js?v=1"></script>
```

Ao testar esta alternativa, não carregue simultaneamente `sodre-footer.js` nem `footer-sodre.js`. Mantenha o script nativo apenas para permitir que a plataforma conclua sua inicialização; no mobile, o elemento `#rodape` será removido e substituído pelo footer independente.

Para usar a composição global pronta, carregue apenas este CSS global e o JavaScript:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/arthurelinux/js-loja-integrada@main/pacote-final-loja-integrada/global-sodre-standalone.css?v=1">
<script src="https://cdn.jsdelivr.net/gh/arthurelinux/js-loja-integrada@main/pacote-final-loja-integrada/sodre-footer-standalone.js?v=1"></script>
```

O CSS global pronto importa o layout global existente e as regras do footer independente. Portanto, não carregue ao mesmo tempo `global-sodre-unificado.css`, `sodre-footer-standalone.css` ou outros CSS globais equivalentes.

Para desfazer o teste, remova esses dois carregamentos e publique novamente o painel. Os arquivos nativos do repositório não são apagados.

## Arquivos usados

- [`README.md`](./README.md)
- [`sodre-footer.css`](./sodre-footer.css)
- [`sodre-footer-universal.css`](./sodre-footer-universal.css)
- [`sodre-footer.js`](./sodre-footer.js)
- [`JS_Codex_Layout_2026_SEM_FOOTER.js`](./JS_Codex_Layout_2026_SEM_FOOTER.js)
- [`sodre-blog-mobile.js`](./sodre-blog-mobile.js)
- [`sodre-footer-standalone.css`](./sodre-footer-standalone.css)
- [`sodre-footer-standalone.js`](./sodre-footer-standalone.js)
- [`global-sodre-standalone.css`](./global-sodre-standalone.css)
