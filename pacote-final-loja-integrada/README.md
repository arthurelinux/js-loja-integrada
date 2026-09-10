# Pacote final — Loja Integrada

Use somente os arquivos e instruções desta pasta. Faça backup dos códigos atuais antes de substituir.

## 1. CSS global

Não substitua o `global.css` inteiro. Mantenha o CSS global atual e remova/comente somente os blocos que contenham:

- `S26FOOTER_MOBILE_BG_20260729`
- `SODRÉ — CORREÇÕES FINAIS MOBILE: FOOTER`
- regras finais de `#rodape.s26-footer` adicionadas durante os testes

Depois carregue, no campo HTML/CSS do painel, este arquivo externo:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/arthurelinux/js-loja-integrada@main/pacote-final-loja-integrada/sodre-footer.css?v=1">
```

## 2. Rodapé

No campo de JavaScript do rodapé, remova `JS_Rodape_MIN.js`, `footer-sodre.js` e qualquer cópia antiga do rodapé. Mantenha apenas o carregamento original da Loja Integrada e acrescente, por último:

```html
<script src="https://cdn.jsdelivr.net/gh/arthurelinux/js-loja-integrada@main/pacote-final-loja-integrada/sodre-footer.js?v=1"></script>
```

O arquivo externo espera o rodapé nativo terminar de carregar e aplica apenas a organização dos elementos existentes. Ele não duplica ícones nem recria o conteúdo.

## 3. Home cards

No HTML da home, mantenha apenas:

```html
<script src="https://cdn.jsdelivr.net/gh/arthurelinux/js-loja-integrada@main/home-card.js?v=final"></script>
```

Não carregue simultaneamente versões antigas de `home-card.js`, `sodre-cards.css` ou `sodre-mobile.css`.

## 4. Desativar conflitos

Não recarregar no painel `JS_Codex_Layout_2026.js` nem `JS_Razao_Social.js` para esta correção do footer. O primeiro excede o limite do painel e o segundo injeta regras mobile que sobrescrevem o rodapé.

Teste em 320, 360, 390 e 430 pixels e depois no desktop. O código inline desta pasta tem menos de 15.000 caracteres; o CSS e o JavaScript do rodapé são externos.
