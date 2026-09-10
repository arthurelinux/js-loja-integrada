/* JS Codex Layout 2026 sem alterações no footer */
// JS_Codex_Layout_2026
//  local publicação = Rodapé
//  página publicação = Página Inicial home
//  tipo = JS
! function() {
    "use strict";
    if (window.__sodre2026Applied) return;
    window.__sodre2026Applied = 1;
    var B = "/pagina/selecionar-ponto-de-coleta.html",
        C = "/pagina/exame-toxicologico-para-clt.html",
        D = "/pagina/credenciado.html",
        G = "/pagina/blog.html",
        S = "https://portalservicos.senatran.serpro.gov.br/#/";

    function Q(s, r) { return (r || document).querySelector(s) }

    function A(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)) }

    function N(t) { return (t || "").replace(/\s+/g, " ").trim() }

    function X(v) { return String(v || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;") }

    function H(s, f, r) { var e = Q(s, r); return e && e.getAttribute("href") || f }

    function T(e, p, v) { e && e.style && e.style.setProperty(p, v, "important") }

    function E(c, i, h) { var e = document.createElement("section"); return e.className = c, e.id = i, e.innerHTML = h, e }

    function Z() {
        if (Q("#s26hm")) return;
        var e = document.createElement("style");
        e.id = "s26hm";
        e.textContent = '@media(max-width:767px){html,body{overflow-x:hidden!important}body.pagina-inicial.s26-layout-2026 *{box-sizing:border-box!important}body.pagina-inicial.s26-layout-2026 :is(.secao-banners,#s26-hero,.s26-map-slot,.cards-sodre,.s26-about,.s26-periodic,.s26-trust,.s26-blog,#barraNewsletter){max-width:100%!important}body.pagina-inicial.s26-layout-2026 .cards-sodre.s26-products :is(.card-detran,.card-empresas,.card-carreira){max-width:calc(100vw - 60px)!important;margin-left:auto!important;margin-right:auto!important}body.pagina-inicial.s26-layout-2026 .s26-about{width:calc(100% - 32px)!important;margin:34px auto!important;padding:34px 16px!important;height:auto!important;overflow:hidden!important;background:#f2f2f3!important}body.pagina-inicial.s26-layout-2026 .s26-about__inner{width:100%!important;max-width:100%!important;height:auto!important;grid-template-columns:1fr!important;gap:0!important;margin:0!important}body.pagina-inicial.s26-layout-2026 .s26-about__content,body.pagina-inicial.s26-layout-2026 .s26-about h2,body.pagina-inicial.s26-layout-2026 .s26-about p,body.pagina-inicial.s26-layout-2026 .s26-about__grid{width:100%!important;max-width:100%!important}body.pagina-inicial.s26-layout-2026 .s26-about h2{margin:0 0 18px!important;font-size:26px!important;line-height:1.14!important;text-align:center!important}body.pagina-inicial.s26-layout-2026 .s26-about p{margin:0 0 16px!important;font-size:14px!important;line-height:1.45!important;text-align:left!important}body.pagina-inicial.s26-layout-2026 .s26-about__grid{height:auto!important;grid-template-columns:1fr!important;margin:18px 0 24px!important}body.pagina-inicial.s26-layout-2026 .s26-about__grid span{height:auto!important;min-height:52px!important}body.pagina-inicial.s26-layout-2026 .s26-about .s26-btn{display:flex!important;margin:20px auto 0!important;justify-content:center!important}body.pagina-inicial.s26-layout-2026 .s26-periodic{width:calc(100% - 52px)!important;height:auto!important;min-height:0!important;aspect-ratio:1113/261!important;margin:34px auto!important}body.pagina-inicial.s26-layout-2026 .s26-periodic__content{display:none!important}}';
        document.head.appendChild(e)
    }

    function W() {
        if (!window.matchMedia || !matchMedia("(max-width:767px)").matches) return;
        T(document.documentElement, "overflow-x", "hidden");
        T(document.body, "overflow-x", "hidden");
        var e = Q(".s26-about__image"),
            a = Q(".card-empresas .s26-product__actions"),
            b = Q(".card-empresas .s26-product__buy"),
            m = Q(".card-empresas .s26-emp"),
            p = m && m.querySelector("span");
        T(e, "display", "none");
        T(e, "height", "0");
        T(e, "min-height", "0");
        T(a, "padding", "0 12px");
        T(a, "gap", "8px");
        T(a, "justify-content", "space-between");
        T(b, "flex", "0 0 146px");
        T(b, "width", "146px");
        T(b, "min-width", "146px");
        T(b, "max-width", "146px");
        T(b, "font-size", "13px");
        T(m, "font", "800 13px Poppins,Arial");
        T(m, "gap", "5px");
        T(p, "width", "30px");
        T(p, "height", "30px");
        T(p, "font-size", "23px")
    }

    function R(sec) {
        var h = E("s26-hero", "s26-hero", '<button class="s26-hero__nav s26-hero__nav--prev" type="button" aria-label="Banner anterior">‹</button><a class="s26-hero__link" href="' + X(H(".card-detran .btn-card[href],.container-cards .btn-card[href]", B)) + '" aria-label="Comprar exame toxicológico"><span class="s26-hero__copy"><span class="s26-hero__title">Desconto exclusivo<br>para seu exame<br>toxicológico da CNH</span><span class="s26-hero__price">Apenas R$120,00</span><span class="s26-hero__coupon">Cupom: PRIMEIRACNH</span></span></a><button class="s26-hero__nav s26-hero__nav--next" type="button" aria-label="Próximo banner">›</button>'),
            old = Q("#s26-hero");
        old ? old.parentNode.replaceChild(h, old) : sec.insertBefore(h, sec.firstChild)
    }

    function M(cards) {
        var m = Q(".container-mapa");
        if (!m || !cards) return;
        var s = Q(".s26-map-slot");
        s || (s = document.createElement("div"), s.className = "s26-map-slot", cards.parentNode.insertBefore(s, cards));
        s.contains(m) || s.appendChild(m);
        m.classList.add("s26-map");
        var i = Q("input[type='text'],input:not([type]),.input-cidade", m),
            o = Q("select", m);
        i && !i.placeholder && (i.placeholder = "Insira o nome da cidade");
        o && o.options.length && N(o.options[0].textContent).toLowerCase() != "bairro" && (o.options[0].textContent = "Bairro");

        function u() {
            var e = Q("#info_labs,.info-labs", m),
                a = Q(".map_content,#map_canvas,#map", m);
            m.classList.toggle("s26-map--expanded", Boolean(i && N(i.value)) || Boolean(e && N(e.textContent)) || Boolean(a && a.offsetHeight > 120))
        }
        i && "ready" != i.getAttribute("data-s26-watch") && (i.setAttribute("data-s26-watch", "ready"), ["input", "change", "keyup"].forEach(function(e) { i.addEventListener(e, u) }));
        o && "ready" != o.getAttribute("data-s26-watch") && (o.setAttribute("data-s26-watch", "ready"), o.addEventListener("change", u));
        window.MutationObserver && "ready" != m.getAttribute("data-s26-observer") && (m.setAttribute("data-s26-observer", "ready"), new MutationObserver(u).observe(m, { childList: 1, subtree: 1, characterData: 1 }));
        u()
    }

    function P(card) {
        if (!card || card.getAttribute("data-s26-product") == "ready") return;
        var e = card.classList.contains("card-empresas"),
            a = card.classList.contains("card-carreira"),
            t = e ? "EMPRESAS" : a ? "CONCURSO PÚBLICO" : "DETRAN",
            d = e ? "Exame Toxicológico CLT<br>(Lei 13.103 e Portaria MTE Nº 612)" : a ? "Concursos Públicos<br>Diversos Cargos" : "Exame Toxicológico CNH<br>(Categorias A, B, C, D e E)",
            p = a ? "169,90" : "129,90",
            x = a ? "ou em até 5x de<br>R$33,98 sem juros" : "ou em até 3x de<br>R$43,30 sem juros",
            st = e ? ' style="padding:0 24px!important;gap:14px!important;justify-content:space-between!important"' : ' style="justify-content:center!important"';
        card.setAttribute("data-s26-product", "ready");
        card.innerHTML = '<div class=s26-product__pill>' + t + '</div><div class=s26-product__body><h3 class=s26-product__name>' + d + '</h3><div class=s26-product__price><span>A partir de</span><strong><small>R$</small>' + p + '</strong></div><p class=s26-product__installment>' + x + '</p><div class=s26-product__actions' + st + '><a class=s26-product__buy href="' + X(H(".btn-card[href]", B, card)) + '">Compre Agora <span>↗</span></a>' + (e ? '<a class=s26-emp style="display:flex!important;align-items:center!important;gap:8px!important;white-space:nowrap!important;color:#333!important;font:800 15px Poppins,Arial!important;text-decoration:none!important" href="' + X(C) + '">Saiba Mais<span style="display:grid;place-items:center;width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#2f1b8c,#fb0047);color:#fff;font-size:27px">›</span></a>' : '') + '</div></div><p class=s26-product__note>Consulte o valor de acordo<br>com a região</p>'
    }

    function O() { var e = E("s26-about", "s26-about", '<div class=s26-about__inner style="display:grid!important;opacity:1!important"><div class=s26-about__image style="display:block!important;opacity:1!important;width:min(527px,100%)!important;max-width:100%!important;min-height:min(575px,75vw)!important;background:var(--s26-sheet) -405px -1800px/1920px auto no-repeat!important;border-radius:18px!important" aria-hidden=true></div><div class=s26-about__content style="display:block!important;opacity:1!important;max-width:100%!important"><h2 style="display:block!important;opacity:1!important;color:#12123c!important">Inovação e Qualidade que Conectam Mais de 4.000 Laboratórios no País</h2><p style="display:block!important;opacity:1!important;color:#9a98a0!important">Com 45 anos de atuação no mercado, o Grupo Sodré consolida-se como uma referência nacional a serviço da segurança e conformidade para garantir resultados confiáveis em exames toxicológicos.</p><p style="display:block!important;opacity:1!important;color:#9a98a0!important">Com uma estrutura moderna, tecnologia de ponta e uma ampla rede de laboratórios parceiros em todo o Brasil, a empresa garante excelência operacional, confiabilidade e alto padrão de qualidade em todos os seus serviços.</p><div class=s26-about__grid style="display:grid!important;opacity:1!important"><span>Rede nacional com mais de 4.000 laboratórios parceiros</span><span>Estrutura moderna e tecnologia de ponta</span><span>Alto padrão de qualidade e segurança nos processos</span><span>Profissionais qualificados e continuamente treinados</span></div><a class="s26-btn s26-btn--primary" href="/pagina/quem-somos.html">Saiba mais sobre nós</a></div></div>'); return e.style.cssText = "background:#f2f2f3!important;height:auto!important;overflow:visible!important", e }

    function V(c, i, b) {
        var o = Q("#" + i),
            n = b();
        return o ? (o.parentNode.replaceChild(n, o), n) : (c.insertAdjacentElement("afterend", n), n)
    }

    function L() { return E("s26-credenciado", "s26-credenciado", '<h2>Seja um Credenciado</h2><p>Aumente a lucratividade do seu laboratório com custo inicial zero.</p><a class="s26-btn s26-btn--light" href="' + X(D) + '">Saiba Mais <span>↗</span></a>') }

    function K() { return E("s26-periodic", "s26-periodic", '<div class=s26-periodic__photo aria-hidden=true></div><div class=s26-periodic__content><h2>Quando fazer o exame<br>toxicológico periódico?</h2><p>Clique no botão logo abaixo para ser redirecionado ao site do SENATRAN para consultar a situação do Exame Toxicológico.</p><a class="s26-btn s26-btn--light" href="' + X(S) + '" target=_blank rel=noopener>Consultar a Situação</a></div>') }

    function J() { return E("s26-trust", "s26-trust", '<article class="s26-trust__item s26-trust__item--cert"><span class="s26-trust__icon s26-trust__icon--cert" aria-hidden=true></span><h3>Certificações</h3><span class=s26-trust__cap role=img aria-label="CAP Accredited"></span></article><article class=s26-trust__item><span class="s26-trust__icon s26-trust__icon--support" aria-hidden=true></span><h3>Central de atendimento</h3><p>0800 777 8547<br>Horário de atendimento: 08:00 às 18:00</p></article><article class=s26-trust__item><span class="s26-trust__icon s26-trust__icon--pay" aria-hidden=true></span><h3>Parcelamento</h3><p>pagamento em até 6x sem juros</p></article>') }

    function F(a) {
        var b = Q(".conteiner.blog");
        b || (b = document.createElement("div"), b.className = "conteiner blog");
        a && b.previousElementSibling !== a && a.insertAdjacentElement("afterend", b);
        b.classList.add("s26-blog");
        if (!Q(".devrocket-feed-blog-item", b) && !Q(".s26-blog-fallback", b)) {
            var imgs = ["one", "two", "three"],
                tit = ["Exame toxicológico na primeira CNH", "Motorista: exame toxicológico em dia", "Multa por exame toxicológico vencido"];
            b.innerHTML = '<div class=s26-blog-fallback><div class=s26-blog__head><h2>Fique por dentro de tudo!</h2><a href="' + X(G) + '">Ver todas</a></div><div class=s26-blog__grid>' + imgs.map(function(n, i) { return '<article class=s26-blog-card><a class="s26-blog-card__image s26-blog-card__image--' + n + '" href="' + X(G) + '" aria-label="Ler matéria"></a><div class=s26-blog-card__body><h3>' + tit[i] + '</h3><a href="' + X(G) + '">Leia mais <span>›</span></a></div></article>' }).join("") + '</div></div>'
        }
        var g = Q(".s26-blog__grid", b) || Q(".devrocket-feed-blog", b);
        if (g && g.children.length > 1 && "ready" != b.getAttribute("data-s26-carousel")) {
            b.setAttribute("data-s26-carousel", "ready");
            [
                [-1, "prev", "‹"],
                [1, "next", "›"]
            ].forEach(function(v) {
                var bt = document.createElement("button");
                bt.type = "button";
                bt.className = "s26-blog-arrow s26-blog-arrow--" + v[1];
                bt.innerHTML = v[2];
                bt.setAttribute("aria-label", v[1]);
                bt.onclick = function() { v[0] < 0 ? g.insertBefore(g.lastElementChild, g.firstElementChild) : g.appendChild(g.firstElementChild) };
                b.appendChild(bt)
            })
        }
    }

    function Y() {
        var e = Q("#barraNewsletter .newsletter,.componente.newsletter");
        if (e) {
            e.classList.add("s26-newsletter");
            var t = Q(".texto-newsletter", e) || Q("p", e) || Q(".titulo", e);
            t && (t.innerHTML = "<strong>Assine nossa Newsletter:</strong><span>Obtenha todas as informações mais recentes sobre eventos, vendas e ofertas. Assine agora mesmo:</span>");
            var i = Q("input[type='text'],input[type='email']", e),
                b = Q("button,.botao", e),
                c = Q(".interno-conteudo", e),
                f = Q(".input-conteiner", e);
            i && (i.placeholder = "Email:", T(i, "width", "100%"));
            b && (b.textContent = "ENVIAR", T(b, "width", "124px"));
            c && T(c, "grid-template-columns", "1fr 646px");
            f && (T(f, "display", "grid"), T(f, "grid-template-columns", "1fr 124px"), T(f, "gap", "18px"), T(f, "align-items", "center"))
        }
    }

    function run() {
        if (!document.body.classList.contains("pagina-inicial")) return 1;
        document.body.classList.add("s26-layout-2026");
        Z();
        var sec = Q(".secao-banners"),
            cards = Q(".cards-sodre");
        if (!sec || !cards) return 0;
        R(sec);
        M(cards);
        cards.classList.add("s26-products");
        A(".card-detran,.card-empresas,.card-carreira", cards).forEach(P);
        var av = Q(".card-aviso");
        av && (av.classList.add("s26-card-aviso--hidden"), av.setAttribute("aria-hidden", "true"));
        A(".secao-banners .banner.hidden-phone,.secao-banners .mini-banner").forEach(function(e) { e.classList.contains("cheio") || (e.classList.add("s26-extra-banner--hidden"), e.setAttribute("aria-hidden", "true")) });
        var c = V(cards, "s26-credenciado", L),
            a = V(c, "s26-about", O),
            p = V(a, "s26-periodic", K),
            t = V(p, "s26-trust", J),
            cal = Q(".container-calculadora");
        cal && (cal.classList.add("s26-native-calculator--hidden"), cal.setAttribute("aria-hidden", "true"));
        F(t);
        Y();
        (Q(".conteiner", sec) || sec).classList.add("s26-home-inner");
        document.body.classList.add("s26-home-ready");
        W();
        setTimeout(W, 500);
        return 1
    }

    function ready() {
        var n = 0;
        ! function r() {
            n++;
            run() || n > 30 || setTimeout(r, 500)
        }()
    }
    document.readyState == "loading" ? document.addEventListener("DOMContentLoaded", ready, { once: 1 }) : ready();
    window.addEventListener && window.addEventListener("resize", W)
}();
