window.addEventListener('DOMContentLoaded', function() {
    sessionStorage.setItem('finalidade', '');
    sessionStorage.setItem("SKU", "");
    sessionStorage.setItem("codConcurso", "");

    function generate_uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
            function(c) {
                var uuid = Math.random() * 16 | 0,
                    v = c == 'x' ? uuid : (uuid & 0x3 | 0x8);
                return uuid.toString(16);
            });
    }

    if (sessionStorage.getItem('idSession') === "" || sessionStorage.getItem('idSession') === null) {
        let uuid = generate_uuidv4();
        sessionStorage.setItem('idSession', uuid);
    }

    let doc = document;

    if (doc.querySelector("#listagemProdutos") !== null) {
        doc.querySelector("#listagemProdutos").parentElement.remove();
    }
    //Removendo fullbanner e adicionando cards
    if (doc.querySelector(".secao-banners .banner.cheio .flexslider") !== null) {
        doc.querySelector(".secao-banners .banner.cheio .flexslider").remove();
    }

    let cards = doc.createElement("div");
    cards.classList.add("cards-sodre");
    if (doc.querySelector(".secao-banners .banner.cheio div")) {
        doc.querySelector(".secao-banners .banner.cheio div").appendChild(cards);
    }

    let cdAviso = doc.createElement("div");
    let contCrd = doc.createElement("div");
    let cdDet = doc.createElement("div");
    let cdEmp = doc.createElement("div");
    let cdCarr = doc.createElement("div");
    let tiAviso = doc.createElement("h4");
    let txtAviso = doc.createElement("p");

    cdAviso.classList.add("card-aviso");
    contCrd.classList.add("container-cards");

    if (doc.querySelector(".cards-sodre")) {
        doc.querySelector(".cards-sodre").appendChild(contCrd);
        doc.querySelector(".cards-sodre").appendChild(cdAviso);
    }

    cdDet.classList.add("card-detran");
    cdEmp.classList.add("card-empresas");
    cdCarr.classList.add("card-carreira");

    contCrd.appendChild(cdDet);
    contCrd.appendChild(cdEmp);
    contCrd.appendChild(cdCarr);

    tiAviso.textContent = "COMUNICADO MOTORISTA";
    tiAviso.classList.add("titulo-aviso");
    txtAviso.textContent = "Àqueles que realizaram exames toxicológicos na rede de laboratórios do Laboratório Sodré no período de 12/04/2021 a 31/05/2021: O Laboratório Sodré se compromete a realizar para eles, sem custos, novos exames toxicológicos, desde que solicitados até 10/10/2024, através do número 0800 777 8547. Nessas oportunidades, serão agendados as datas e os locais das respectivas coletas de material biológico, bem como dadas informações necessárias à realização desses novos exames gratuitos.";
    txtAviso.classList.add("texto-aviso");

    cdAviso.appendChild(tiAviso);
    cdAviso.appendChild(txtAviso);

    // Cards - DETRAN
    let contTitDet = doc.createElement("div");
    let txtContTitDet = doc.createElement("h4");
    let txtContSubDet = doc.createElement("h5");
    let txtContDescDet = doc.createElement("h5");
    let crdDivDet = doc.createElement("div");

    let contValDet = doc.createElement("div");
    let qtdParcValDet = doc.createElement("p");
    let contPrecDet = doc.createElement("div");
    let uniPrecDet = doc.createElement("h4");
    let valPrecDet = doc.createElement("h1");
    let valTotDet = doc.createElement("h5");
    let avConsulValDet = doc.createElement("p");

    let contBtnsDet = doc.createElement("div");
    let btnCompCPFDet = doc.createElement("a");
    let btnCompCNPJDet = doc.createElement("a");

    contTitDet.classList.add("container-titulo");
    contValDet.classList.add("container-valor");
    contBtnsDet.classList.add("container-btns");

    txtContTitDet.classList.add("texto-container-titulo");
    txtContTitDet.textContent = "DETRAN";

    txtContSubDet.classList.add("texto-container-subtitulo");
    txtContSubDet.textContent = "Exame Toxicológico CNH";

    txtContDescDet.classList.add("texto-container-descricao");
    txtContDescDet.textContent = "(Categorias C/D/E)";

    crdDivDet.classList.add("card-divisor");

    contTitDet.appendChild(txtContTitDet);
    contTitDet.appendChild(txtContSubDet);
    contTitDet.appendChild(txtContDescDet);
    contTitDet.appendChild(crdDivDet);

    qtdParcValDet.classList.add("qtde-parcelas-valor");
    qtdParcValDet.textContent = "Até 5x sem juros de";

    contPrecDet.classList.add("container-preco");

    uniPrecDet.classList.add("unidade-preco");
    uniPrecDet.textContent = "R$";

    valPrecDet.classList.add("valor-preco");
    valPrecDet.textContent = "29,80";

    contPrecDet.appendChild(uniPrecDet);
    contPrecDet.appendChild(valPrecDet);

    valTotDet.classList.add("valor-total");
    valTotDet.textContent = "Total: a partir de R$149,00*";

    avConsulValDet.classList.add("aviso-consultar-valor");
    avConsulValDet.textContent = "*Consulte o valor de acordo com a região, no nosso site.";

    contValDet.appendChild(qtdParcValDet);
    contValDet.appendChild(contPrecDet);
    contValDet.appendChild(valTotDet);
    contValDet.appendChild(avConsulValDet);

    btnCompCPFDet.classList.add("btn-card");
    btnCompCPFDet.textContent = "Compra por CPF";
    btnCompCPFDet.setAttribute("href", "/pagina/selecionar-ponto-de-coleta.html");
    btnCompCPFDet.addEventListener("click", function() { sessionStorage.setItem('finalidade', 'CNH');
        sessionStorage.setItem('pessoa', 'fisica'); });

    btnCompCNPJDet.classList.add("btn-card");
    btnCompCNPJDet.textContent = "Compra por CNPJ";
    btnCompCNPJDet.setAttribute("href", "/pagina/selecionar-ponto-de-coleta.html");
    btnCompCNPJDet.addEventListener("click", function() { sessionStorage.setItem('finalidade', 'CNH');
        sessionStorage.setItem('pessoa', 'juridica'); });

    contBtnsDet.appendChild(btnCompCPFDet);
    contBtnsDet.appendChild(btnCompCNPJDet);

    if (doc.querySelector(".card-detran")) {
        doc.querySelector(".card-detran").appendChild(contTitDet);
        doc.querySelector(".card-detran").appendChild(contValDet);
        doc.querySelector(".card-detran").appendChild(contBtnsDet);
    }

    // EMPRESAS
    let contTitEmp = doc.createElement("div");
    let txtContTitEmp = doc.createElement("h4");
    let txtContSubEmp = doc.createElement("h5");
    let txtContDescEmp = doc.createElement("h5");
    let crdDivEmp = doc.createElement("div");

    let contValEmp = doc.createElement("div");
    let qtdParcValEmp = doc.createElement("p");
    let contPrecEmp = doc.createElement("div");
    let uniPrecEmp = doc.createElement("h4");
    let valPrecEmp = doc.createElement("h1");
    let valTotEmp = doc.createElement("h5");
    let aviConsulValEmp = doc.createElement("p");

    let contBtnsEmp = doc.createElement("div");
    let btnCompCNPJEmp = doc.createElement("a");

    contTitEmp.classList.add("container-titulo");
    contValEmp.classList.add("container-valor");
    contBtnsEmp.classList.add("container-btns");

    txtContTitEmp.classList.add("texto-container-titulo");
    txtContTitEmp.textContent = "EMPRESAS";

    txtContSubEmp.classList.add("texto-container-subtitulo");
    txtContSubEmp.textContent = "Exame Toxicológico CLT";

    txtContDescEmp.classList.add("texto-container-descricao");
    txtContDescEmp.textContent = "(Lei 13.103 e Portaria MTPS nº 642)";

    crdDivEmp.classList.add("card-divisor");

    contTitEmp.appendChild(txtContTitEmp);
    contTitEmp.appendChild(txtContSubEmp);
    contTitEmp.appendChild(txtContDescEmp);
    contTitEmp.appendChild(crdDivEmp);

    qtdParcValEmp.classList.add("qtde-parcelas-valor");
    qtdParcValEmp.textContent = "Até 5x sem juros de";

    contPrecEmp.classList.add("container-preco");

    uniPrecEmp.classList.add("unidade-preco");
    uniPrecEmp.textContent = "R$";

    valPrecEmp.classList.add("valor-preco");
    valPrecEmp.textContent = "29,80";

    contPrecEmp.appendChild(uniPrecEmp);
    contPrecEmp.appendChild(valPrecEmp);

    valTotEmp.classList.add("valor-total");
    valTotEmp.textContent = "Total: a partir de R$149,00*";

    aviConsulValEmp.classList.add("aviso-consultar-valor");
    aviConsulValEmp.textContent = "*Consulte o valor de acordo com a região, no nosso site.";

    contValEmp.appendChild(qtdParcValEmp);
    contValEmp.appendChild(contPrecEmp);
    contValEmp.appendChild(valTotEmp);
    contValEmp.appendChild(aviConsulValEmp);

    btnCompCNPJEmp.classList.add("btn-card");
    btnCompCNPJEmp.textContent = "Compra por CNPJ";
    btnCompCNPJEmp.setAttribute("href", "/pagina/selecionar-ponto-de-coleta.html");
    btnCompCNPJEmp.addEventListener("click", function() { sessionStorage.setItem('finalidade', 'CLT');
        sessionStorage.setItem('pessoa', 'juridica'); });

    contBtnsEmp.appendChild(btnCompCNPJEmp);

    if (doc.querySelector(".card-empresas")) {
        doc.querySelector(".card-empresas").appendChild(contTitEmp);
        doc.querySelector(".card-empresas").appendChild(contValEmp);
        doc.querySelector(".card-empresas").appendChild(contBtnsEmp);
    }

    // CARREIRA
    let contTitCarr = doc.createElement("div");
    let txtContTitCarr = doc.createElement("h4");
    let txtContSubCarr = doc.createElement("h5");
    let txtContDescCarr = doc.createElement("h5");
    let crdDivCarr = doc.createElement("div");

    let contValCarr = doc.createElement("div");
    let qtdParcValCarr = doc.createElement("p");
    let contPrecCarr = doc.createElement("div");
    let uniPrecCarr = doc.createElement("h4");
    let valPrecCarr = doc.createElement("h1");
    let valTotCarr = doc.createElement("h5");
    let aviConsulValCarr = doc.createElement("p");

    let contBtnsCarr = doc.createElement("div");
    let btnCompCarr = doc.createElement("a");

    contTitCarr.classList.add("container-titulo");
    contValCarr.classList.add("container-valor");
    contBtnsCarr.classList.add("container-btns");

    txtContTitCarr.classList.add("texto-container-titulo");
    txtContTitCarr.textContent = "CARREIRA PÚBLICA";

    txtContSubCarr.classList.add("texto-container-subtitulo");
    txtContSubCarr.textContent = "Concursos Públicos";

    txtContDescCarr.classList.add("texto-container-descricao");
    txtContDescCarr.textContent = "Diversos Cargos";

    crdDivCarr.classList.add("card-divisor");

    contTitCarr.appendChild(txtContTitCarr);
    contTitCarr.appendChild(txtContSubCarr);
    contTitCarr.appendChild(txtContDescCarr);
    contTitCarr.appendChild(crdDivCarr);

    qtdParcValCarr.classList.add("qtde-parcelas-valor");
    qtdParcValCarr.textContent = "Até 5x sem juros de";

    contPrecCarr.classList.add("container-preco");

    uniPrecCarr.classList.add("unidade-preco");
    uniPrecCarr.textContent = "R$";

    valPrecCarr.classList.add("valor-preco");
    valPrecCarr.textContent = "39,80";

    contPrecCarr.appendChild(uniPrecCarr);
    contPrecCarr.appendChild(valPrecCarr);

    valTotCarr.classList.add("valor-total");
    valTotCarr.textContent = "Total: a partir de R$199,00*";

    aviConsulValCarr.classList.add("aviso-consultar-valor");
    aviConsulValCarr.textContent = "*Consulte o valor de acordo com a região, no nosso site.";

    contValCarr.appendChild(qtdParcValCarr);
    contValCarr.appendChild(contPrecCarr);
    contValCarr.appendChild(valTotCarr);
    contValCarr.appendChild(aviConsulValCarr);

    btnCompCarr.classList.add("btn-card");
    btnCompCarr.textContent = "Compre Agora";
    btnCompCarr.setAttribute("href", "/pagina/selecionar-ponto-de-coleta.html");
    btnCompCarr.addEventListener("click", function() { sessionStorage.setItem('finalidade', 'Concurso');
        sessionStorage.setItem('pessoa', 'fisica'); });

    contBtnsCarr.appendChild(btnCompCarr);

    if (doc.querySelector(".card-carreira")) {
        doc.querySelector(".card-carreira").appendChild(contTitCarr);
        doc.querySelector(".card-carreira").appendChild(contValCarr);
        doc.querySelector(".card-carreira").appendChild(contBtnsCarr);
    }

    //Removendo borda do menu mobile
    if (doc.querySelector(".atalhos-mobile") !== null) {
        doc.querySelector(".atalhos-mobile").classList.remove("borda-principal");
    }
    //Removendo fundo-secundario do menu mobile
    if (doc.querySelector(".atalhos-mobile")) {
        doc.querySelector(".atalhos-mobile").classList.remove("fundo-secundario");
    }

    mostrarModalInstabilidade();
});

function mostrarModalInstabilidade() {
    let modal = `
        <div id="modalInstabilidade" class="modal in" style="margin-top: 25vh !important" tabindex="-1" aria-labelledby="modalInstabilidade" aria-hidden="false">
            <div class="modal-header">
                <button type="button" class="close closeModalInstabilidade" data-dismiss="modal" aria-hidden="true"><i class="icon-remove"></i></button>
                <span class="titulo cor-secundaria">ATENÇÃO!</span>
            </div>
            <div class="modal-body borda-principal" style="max-height: fit-content;">
                <h4>Informamos que nosso canal de atendimento 0800.7778547 encontra-se com instabilidade.</h4>
                <h4>Para atendimento com urgência ou demais informações, utilize o nosso e-mail <a href="mailto:central@laboratoriosodre.com.br">central@laboratoriosodre.com.br</a></h4>
                <h4>Pedimos desculpas pelo transtorno, já estamos trabalhando para regularizar o quanto antes.</h4>
                <h4>Canais de Acesso</h4>
            </div>
            <div class="modal-footer">
                <button type="button" class="botao principal closeModalInstabilidade" data-bs-dismiss="modal">OK</button>
            </div>
        </div>
    `;

    if (sessionStorage.getItem('comunicadoVisualizado') != 'true') {
        if (typeof $ !== 'undefined') {
            $('body').append(modal);
            alternarOpacidadeFundo();

            $('.closeModalInstabilidade').on('click', function() {
                $('#modalInstabilidade').addClass('hide');
                alternarOpacidadeFundo(false);
                sessionStorage.setItem('comunicadoVisualizado', true);
            });
        }
    }
}

function alternarOpacidadeFundo(ofuscar = true) {
    if (typeof $ !== 'undefined') {
        $(".conteiner-principal").css("background-color", ofuscar ? "#f4f4f4" : "transparent");
        $(".conteiner-principal #cabecalho").css("opacity", ofuscar ? "15%" : "100%");
        $(".conteiner-principal #corpo").css("opacity", ofuscar ? "15%" : "100%");
        $(".conteiner-principal #rodape").css("opacity", ofuscar ? "15%" : "100%");
        $(".conteiner-principal .secao-banners").css("opacity", ofuscar ? "15%" : "100%");
        $(".barra-inicial").css("opacity", ofuscar ? "15%" : "100%");
    }
}

/* ==========================================================
   CSS RESPONSIVO INJETADO (DESKTOP E MOBILE)
   ========================================================== */
;
(() => {
    var s = document.createElement('style');
    s.textContent = `
        /* Container Geral dos Cards */
        .cards-sodre {
            width: 100%;
            max-width: 1200px;
            margin: 20px auto;
            padding: 0 15px;
            box-sizing: border-box;
        }

        /* Container Flex para os 3 Cards */
        .cards-sodre .container-cards {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: stretch;
            gap: 20px;
            flex-wrap: wrap;
        }

        /* Estilo Individual dos Cards */
        .card-detran, .card-empresas, .card-carreira {
            background-color: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 24px 20px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex: 1 1 300px;
            max-width: 360px;
            box-sizing: border-box;
            text-align: center;
        }

        /* Cabeçalho do Card */
        .container-titulo .texto-container-titulo {
            font-size: 1.5rem;
            font-weight: 700;
            margin: 0 0 5px 0;
            color: #1a202c;
        }
        .container-titulo .texto-container-subtitulo {
            font-size: 1.1rem;
            font-weight: 600;
            margin: 0 0 4px 0;
            color: #4a5568;
        }
        .container-titulo .texto-container-descricao {
            font-size: 0.9rem;
            font-weight: 400;
            margin: 0;
            color: #718096;
        }
        .card-divisor {
            height: 2px;
            background-color: #edf2f7;
            margin: 15px 0;
            width: 100%;
        }

        /* Bloco de Preço */
        .container-valor {
            margin: 15px 0;
        }
        .qtde-parcelas-valor {
            font-size: 0.9rem;
            color: #718096;
            margin: 0;
        }
        .container-preco {
            display: flex;
            justify-content: center;
            align-items: baseline;
            gap: 4px;
            margin: 5px 0;
        }
        .unidade-preco {
            font-size: 1.2rem;
            font-weight: 600;
            margin: 0;
            color: #2d3748;
        }
        .valor-preco {
            font-size: 2.8rem;
            font-weight: 800;
            line-height: 1;
            margin: 0;
            color: #2d3748;
        }
        .valor-total {
            font-size: 0.95rem;
            font-weight: 700;
            margin: 5px 0 0 0;
            color: #2d3748;
        }
        .aviso-consultar-valor {
            font-size: 0.75rem;
            color: #a0aec0;
            margin: 6px 0 0 0;
        }

        /* Botões */
        .container-btns {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 15px;
        }
        .btn-card {
            display: block;
            width: 100%;
            padding: 12px 16px;
            background-color: #0056b3;
            color: #ffffff !important;
            text-decoration: none !important;
            border-radius: 6px;
            font-weight: 700;
            font-size: 0.95rem;
            text-align: center;
            box-sizing: border-box;
            transition: background-color 0.2s ease-in-out;
        }
        .btn-card:hover {
            background-color: #003d80;
        }

        /* Card de Aviso (Comunicado) */
        .card-aviso {
            background-color: #fff8e6;
            border: 1px solid #ffe58f;
            border-radius: 8px;
            padding: 16px;
            margin-top: 25px;
            text-align: center;
        }
        .card-aviso .titulo-aviso {
            color: #d48806;
            font-size: 1.1rem;
            font-weight: 700;
            margin: 0 0 8px 0;
        }
        .card-aviso .texto-aviso {
            color: #595959;
            font-size: 0.85rem;
            line-height: 1.5;
            margin: 0;
        }

        /* AJUSTES ESPECÍFICOS PARA DISPOSITIVOS MÓVEIS (MOBILE) */
        @media (max-width: 768px) {
            .cards-sodre .container-cards {
                flex-direction: column;
                align-items: center;
            }
            .card-detran, .card-empresas, .card-carreira {
                width: 100%;
                max-width: 100%;
            }
        }

        /* Regras antigas mantidas para a loja integrada */
        @media(min-width: 980px){
            .pagina-inicial .s26-product__body:after {
                content: "";
                display: block !important;
                position: absolute;
                left: 0; right: 0; bottom: 18px;
                height: 50px;
                background: #f3f3f5;
                z-index: 20;
            }
            .pagina-inicial .cards-sodre.s26-products .s26-product__actions {
                opacity: 1 !important;
                left: 0 !important;
                width: 100% !important;
                display: flex !important;
                justify-content: center !important;
                z-index: 30 !important;
            }
        }
    `;
    document.head.appendChild(s);
})();