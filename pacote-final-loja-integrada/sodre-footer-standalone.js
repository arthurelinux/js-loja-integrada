/*! Sodré standalone footer — não depende do footer nativo da Loja Integrada. */
(function () {
  'use strict';

  var ROOT_ID = 'sodre-footer-root';
  var MOBILE_QUERY = '(max-width: 767px)';
  var CANONICAL_SRC = 'https://cdn.awsli.com.br/2648/2648975/arquivos/sodretox-footer-2026-20260721-final.js?v=20260721f';
  var links = {
    'Minha Conta': [
      ['Fale Conosco', '/pagina/fale-conosco.html'],
      ['Seja um credenciado', '/pagina/seja-um-credenciado.html'],
      ['Dúvidas Frequentes', '/pagina/duvidas-frequentes.html'],
      ['Exame toxicológico', '/pagina/exame-toxicologico.html'],
      ['Exame Toxicológico para CLT', '/pagina/exame-toxicologico-para-clt.html'],
      ['Política da Qualidade', '/pagina/politica-da-qualidade.html'],
      ['Política de Privacidade', '/pagina/politica-de-privacidade.html'],
      ['Quem Somos', '/pagina/quem-somos.html'],
      ['Blog', '/pagina/blog.html']
    ],
    'Nossos sites': [
      ['Portal Empresa', '//ecommerce.sodretox.com.br/acesso-empresa/login/'],
      ['Acesso Credenciado', '//ecommerce.sodretox.com.br/acesso-credenciado/'],
      ['Análises Clínicas', '//www.laboratoriosodre.com.br/'],
      ['Clínica de Vacinas', '//clinicadevacinassodre.com.br/']
    ]
  };

  function list(items) {
    return '<ul>' + items.map(function (item) {
      return '<li><a href="' + item[1] + '">' + item[0] + '</a></li>';
    }).join('') + '</ul>';
  }

  function markup() {
    return '<div class="sodre-footer-inner"><div class="sodre-footer-grid">' +
      '<section><h2>Mapa do site</h2>' + list([['Pontos de Coleta', '/pagina/selecionar-ponto-de-coleta.html']]) + '</section>' +
      '<section><h2>Minha Conta</h2>' + list(links['Minha Conta']) + '</section>' +
      '<section><h2>Nossos sites</h2>' + list(links['Nossos sites']) + '</section>' +
      '<section class="sodre-contact"><h2>Redes Sociais</h2><nav class="sodre-social" aria-label="Redes sociais">' +
      '<a href="//tiktok.com/@sodrelaboratorio" aria-label="TikTok">♪</a><a href="//instagram.com/sodrelaboratorio" aria-label="Instagram">◎</a><a href="//facebook.com/sodrelaboratorio/" aria-label="Facebook">f</a><a href="//linkedin.com/company/laboratorio-sodre/" aria-label="LinkedIn">in</a></nav>' +
      '<strong>Central de Relacionamentos</strong><a href="mailto:atendimento@laboratoriosodre.com.br">atendimento@laboratoriosodre.com.br</a>' +
      '<strong>Assessoria de Comunicação</strong><a href="mailto:mkt@laboratoriosodre.com.br">mkt@laboratoriosodre.com.br</a></section></div>' +
      '<section class="sodre-cert"><h2>Certificações</h2><div class="sodre-cert-list"><span>CAP<br><small>ACCREDITED</small></span><span>CRL 1462</span></div></section></div>' +
      '<div class="sodre-pay"><div class="sodre-footer-inner sodre-pay-inner"><div class="sodre-pay-list"><span>VISA</span><span>Mastercard</span><span>ELO</span><span>PIX</span><span>BOLETO</span><span>PagBank</span></div>' +
      '<div class="sodre-brand"><strong>SODRÉ</strong><p>LABORATÓRIO SODRÉ © 2026 — Todos os direitos reservados.</p><p>Implementação de conteúdo e material fornecidos pelo administrador.</p></div></div></div>';
  }

  function render() {
    var native = document.getElementById('rodape');
    if (native && native.id === ROOT_ID) native = null;
    var root = document.getElementById(ROOT_ID);
    if (!window.matchMedia(MOBILE_QUERY).matches) {
      if (root) root.remove();
      return;
    }
    if (native) {
      var nativeContent = native.innerHTML;
      native.remove();
      if (root) {
        /* O footer nativo pode chegar depois do DOMContentLoaded. */
        if (nativeContent) root.innerHTML = nativeContent;
      } else {
        root = document.createElement('footer');
        root.id = ROOT_ID;
        root.className = 'sodre-mobile-footer s26-footer s26f';
        root.setAttribute('aria-label', 'Rodapé');
        root.innerHTML = nativeContent || markup();
        document.body.appendChild(root);
      }
    }
    if (!root) {
      root = document.createElement('footer');
      root.id = ROOT_ID;
      root.className = 'sodre-mobile-footer s26-footer s26f';
      root.setAttribute('aria-label', 'Rodapé');
      root.innerHTML = markup();
      document.body.appendChild(root);
    }
  }

  function start() {
    var canonical = document.createElement('script');
    canonical.src = CANONICAL_SRC;
    canonical.onload = function () {
      render();
      setTimeout(render, 300);
      setTimeout(render, 1000);
    };
    document.head.appendChild(canonical);
    setTimeout(render, 500);
    new MutationObserver(render).observe(document.body, { childList: true, subtree: true });
    window.addEventListener('resize', render);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
}());
