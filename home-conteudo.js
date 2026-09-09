// window.addEventListener('DOMContentLoaded', function() {
//     sessionStorage.setItem('finalidade', '');
//     sessionStorage.setItem("SKU", "");
//     sessionStorage.setItem("codConcurso", "");

//     function generate_uuidv4() {
//         return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
//             function(c) {
//                 var uuid = Math.random() * 16 | 0,
//                     v = c == 'x' ? uuid : (uuid & 0x3 | 0x8);
//                 return uuid.toString(16);
//             });
//     }

//     if (sessionStorage.getItem('idSession') === "" || sessionStorage.getItem('idSession') === null) {
//         let uuid = generate_uuidv4();
//         sessionStorage.setItem('idSession', uuid);
//     }

//     let doc = document;

//     if (doc.querySelector("#listagemProdutos") !== null) {
//         doc.querySelector("#listagemProdutos").parentElement.remove();
//     }
//     //Removendo fullbanner e adicionando cards
//     if (doc.querySelector(".secao-banners .banner.cheio .flexslider") !== null) {
//         doc.querySelector(".secao-banners .banner.cheio .flexslider").remove();
//     }

//     let cards = doc.createElement("div");
//     cards.classList.add("cards-sodre");
//     if (doc.querySelector(".secao-banners .banner.cheio div")) {
//         doc.querySelector(".secao-banners .banner.cheio div").appendChild(cards);
//     }

//     let cdAviso = doc.createElement("div");
//     let contCrd = doc.createElement("div");
//     let cdDet = doc.createElement("div");
//     let cdEmp = doc.createElement("div");
//     let cdCarr = doc.createElement("div");
//     let tiAviso = doc.createElement("h4");
//     let txtAviso = doc.createElement("p");

//     cdAviso.classList.add("card-aviso");
//     contCrd.classList.add("container-cards");

//     if (doc.querySelector(".cards-sodre")) {
//         doc.querySelector(".cards-sodre").appendChild(contCrd);
//         doc.querySelector(".cards-sodre").appendChild(cdAviso);
//     }

//     cdDet.classList.add("card-detran");
//     cdEmp.classList.add("card-empresas");
//     cdCarr.classList.add("card-carreira");

//     contCrd.appendChild(cdDet);
//     contCrd.appendChild(cdEmp);
//     contCrd.appendChild(cdCarr);

//     tiAviso.textContent = "COMUNICADO MOTORISTA";
//     tiAviso.classList.add("titulo-aviso");
//     txtAviso.textContent = "Àqueles que realizaram exames toxicológicos na rede de laboratórios do Laboratório Sodré no período de 12/04/2021 a 31/05/2021: O Laboratório Sodré se compromete a realizar para eles, sem custos, novos exames toxicológicos, desde que solicitados até 10/10/2024, através do número 0800 777 8547. Nessas oportunidades, serão agendados as datas e os locais das respectivas coletas de material biológico, bem como dadas informações necessárias à realização desses novos exames gratuitos.";
//     txtAviso.classList.add("texto-aviso");

//     cdAviso.appendChild(tiAviso);
//     cdAviso.appendChild(txtAviso);

//     // Cards - DETRAN
//     let contTitDet = doc.createElement("div");
//     let txtContTitDet = doc.createElement("h4");
//     let txtContSubDet = doc.createElement("h5");
//     let txtContDescDet = doc.createElement("h5");
//     let crdDivDet = doc.createElement("div");

//     let contValDet = doc.createElement("div");
//     let qtdParcValDet = doc.createElement("p");
//     let contPrecDet = doc.createElement("div");
//     let uniPrecDet = doc.createElement("h4");
//     let valPrecDet = doc.createElement("h1");
//     let valTotDet = doc.createElement("h5");
//     let avConsulValDet = doc.createElement("p");

//     let contBtnsDet = doc.createElement("div");
//     let btnCompCPFDet = doc.createElement("a");
//     let btnCompCNPJDet = doc.createElement("a");

//     contTitDet.classList.add("container-titulo");
//     contValDet.classList.add("container-valor");
//     contBtnsDet.classList.add("container-btns");

//     txtContTitDet.classList.add("texto-container-titulo");
//     txtContTitDet.textContent = "DETRAN";

//     txtContSubDet.classList.add("texto-container-subtitulo");
//     txtContSubDet.textContent = "Exame Toxicológico CNH";

//     txtContDescDet.classList.add("texto-container-descricao");
//     txtContDescDet.textContent = "(Categorias C/D/E)";

//     crdDivDet.classList.add("card-divisor");

//     contTitDet.appendChild(txtContTitDet);
//     contTitDet.appendChild(txtContSubDet);
//     contTitDet.appendChild(txtContDescDet);
//     contTitDet.appendChild(crdDivDet);

//     qtdParcValDet.classList.add("qtde-parcelas-valor");
//     qtdParcValDet.textContent = "Até 5x sem juros de";

//     contPrecDet.classList.add("container-preco");

//     uniPrecDet.classList.add("unidade-preco");
//     uniPrecDet.textContent = "R$";

//     valPrecDet.classList.add("valor-preco");
//     valPrecDet.textContent = "29,80";

//     contPrecDet.appendChild(uniPrecDet);
//     contPrecDet.appendChild(valPrecDet);

//     valTotDet.classList.add("valor-total");
//     valTotDet.textContent = "Total: a partir de R$149,00*";

//     avConsulValDet.classList.add("aviso-consultar-valor");
//     avConsulValDet.textContent = "*Consulte o valor de acordo com a região, no nosso site.";

//     contValDet.appendChild(qtdParcValDet);
//     contValDet.appendChild(contPrecDet);
//     contValDet.appendChild(valTotDet);
//     contValDet.appendChild(avConsulValDet);

//     btnCompCPFDet.classList.add("btn-card");
//     btnCompCPFDet.textContent = "Compra por CPF";
//     btnCompCPFDet.setAttribute("href", "/pagina/selecionar-ponto-de-coleta.html");
//     btnCompCPFDet.addEventListener("click", function() { sessionStorage.setItem('finalidade', 'CNH');
//         sessionStorage.setItem('pessoa', 'fisica'); });

//     btnCompCNPJDet.classList.add("btn-card");
//     btnCompCNPJDet.textContent = "Compra por CNPJ";
//     btnCompCNPJDet.setAttribute("href", "/pagina/selecionar-ponto-de-coleta.html");
//     btnCompCNPJDet.addEventListener("click", function() { sessionStorage.setItem('finalidade', 'CNH');
//         sessionStorage.setItem('pessoa', 'juridica'); });

//     contBtnsDet.appendChild(btnCompCPFDet);
//     contBtnsDet.appendChild(btnCompCNPJDet);

//     if (doc.querySelector(".card-detran")) {
//         doc.querySelector(".card-detran").appendChild(contTitDet);
//         doc.querySelector(".card-detran").appendChild(contValDet);
//         doc.querySelector(".card-detran").appendChild(contBtnsDet);
//     }

//     // EMPRESAS
//     let contTitEmp = doc.createElement("div");
//     let txtContTitEmp = doc.createElement("h4");
//     let txtContSubEmp = doc.createElement("h5");
//     let txtContDescEmp = doc.createElement("h5");
//     let crdDivEmp = doc.createElement("div");

//     let contValEmp = doc.createElement("div");
//     let qtdParcValEmp = doc.createElement("p");
//     let contPrecEmp = doc.createElement("div");
//     let uniPrecEmp = doc.createElement("h4");
//     let valPrecEmp = doc.createElement("h1");
//     let valTotEmp = doc.createElement("h5");
//     let aviConsulValEmp = doc.createElement("p");

//     let contBtnsEmp = doc.createElement("div");
//     let btnCompCNPJEmp = doc.createElement("a");

//     contTitEmp.classList.add("container-titulo");
//     contValEmp.classList.add("container-valor");
//     contBtnsEmp.classList.add("container-btns");

//     txtContTitEmp.classList.add("texto-container-titulo");
//     txtContTitEmp.textContent = "EMPRESAS";

//     txtContSubEmp.classList.add("texto-container-subtitulo");
//     txtContSubEmp.textContent = "Exame Toxicológico CLT";

//     txtContDescEmp.classList.add("texto-container-descricao");
//     txtContDescEmp.textContent = "(Lei 13.103 e Portaria MTPS nº 642)";

//     crdDivEmp.classList.add("card-divisor");

//     contTitEmp.appendChild(txtContTitEmp);
//     contTitEmp.appendChild(txtContSubEmp);
//     contTitEmp.appendChild(txtContDescEmp);
//     contTitEmp.appendChild(crdDivEmp);

//     qtdParcValEmp.classList.add("qtde-parcelas-valor");
//     qtdParcValEmp.textContent = "Até 5x sem juros de";

//     contPrecEmp.classList.add("container-preco");

//     uniPrecEmp.classList.add("unidade-preco");
//     uniPrecEmp.textContent = "R$";

//     valPrecEmp.classList.add("valor-preco");
//     valPrecEmp.textContent = "29,80";

//     contPrecEmp.appendChild(uniPrecEmp);
//     contPrecEmp.appendChild(valPrecEmp);

//     valTotEmp.classList.add("valor-total");
//     valTotEmp.textContent = "Total: a partir de R$149,00*";

//     aviConsulValEmp.classList.add("aviso-consultar-valor");
//     aviConsulValEmp.textContent = "*Consulte o valor de acordo com a região, no nosso site.";

//     contValEmp.appendChild(qtdParcValEmp);
//     contValEmp.appendChild(contPrecEmp);
//     contValEmp.appendChild(valTotEmp);
//     contValEmp.appendChild(aviConsulValEmp);

//     btnCompCNPJEmp.classList.add("btn-card");
//     btnCompCNPJEmp.textContent = "Compra por CNPJ";
//     btnCompCNPJEmp.setAttribute("href", "/pagina/selecionar-ponto-de-coleta.html");
//     btnCompCNPJEmp.addEventListener("click", function() { sessionStorage.setItem('finalidade', 'CLT');
//         sessionStorage.setItem('pessoa', 'juridica'); });

//     contBtnsEmp.appendChild(btnCompCNPJEmp);

//     if (doc.querySelector(".card-empresas")) {
//         doc.querySelector(".card-empresas").appendChild(contTitEmp);
//         doc.querySelector(".card-empresas").appendChild(contValEmp);
//         doc.querySelector(".card-empresas").appendChild(contBtnsEmp);
//     }

//     // CARREIRA
//     let contTitCarr = doc.createElement("div");
//     let txtContTitCarr = doc.createElement("h4");
//     let txtContSubCarr = doc.createElement("h5");
//     let txtContDescCarr = doc.createElement("h5");
//     let crdDivCarr = doc.createElement("div");

//     let contValCarr = doc.createElement("div");
//     let qtdParcValCarr = doc.createElement("p");
//     let contPrecCarr = doc.createElement("div");
//     let uniPrecCarr = doc.createElement("h4");
//     let valPrecCarr = doc.createElement("h1");
//     let valTotCarr = doc.createElement("h5");
//     let aviConsulValCarr = doc.createElement("p");

//     let contBtnsCarr = doc.createElement("div");
//     let btnCompCarr = doc.createElement("a");

//     contTitCarr.classList.add("container-titulo");
//     contValCarr.classList.add("container-valor");
//     contBtnsCarr.classList.add("container-btns");

//     txtContTitCarr.classList.add("texto-container-titulo");
//     txtContTitCarr.textContent = "CARREIRA PÚBLICA";

//     txtContSubCarr.classList.add("texto-container-subtitulo");
//     txtContSubCarr.textContent = "Concursos Públicos";

//     txtContDescCarr.classList.add("texto-container-descricao");
//     txtContDescCarr.textContent = "Diversos Cargos";

//     crdDivCarr.classList.add("card-divisor");

//     contTitCarr.appendChild(txtContTitCarr);
//     contTitCarr.appendChild(txtContSubCarr);
//     contTitCarr.appendChild(txtContDescCarr);
//     contTitCarr.appendChild(crdDivCarr);

//     qtdParcValCarr.classList.add("qtde-parcelas-valor");
//     qtdParcValCarr.textContent = "Até 5x sem juros de";

//     contPrecCarr.classList.add("container-preco");

//     uniPrecCarr.classList.add("unidade-preco");
//     uniPrecCarr.textContent = "R$";

//     valPrecCarr.classList.add("valor-preco");
//     valPrecCarr.textContent = "39,80";

//     contPrecCarr.appendChild(uniPrecCarr);
//     contPrecCarr.appendChild(valPrecCarr);

//     valTotCarr.classList.add("valor-total");
//     valTotCarr.textContent = "Total: a partir de R$199,00*";

//     aviConsulValCarr.classList.add("aviso-consultar-valor");
//     aviConsulValCarr.textContent = "*Consulte o valor de acordo com a região, no nosso site.";

//     contValCarr.appendChild(qtdParcValCarr);
//     contValCarr.appendChild(contPrecCarr);
//     contValCarr.appendChild(valTotCarr);
//     contValCarr.appendChild(aviConsulValCarr);

//     btnCompCarr.classList.add("btn-card");
//     btnCompCarr.textContent = "Compre Agora";
//     btnCompCarr.setAttribute("href", "/pagina/selecionar-ponto-de-coleta.html");
//     btnCompCarr.addEventListener("click", function() { sessionStorage.setItem('finalidade', 'Concurso');
//         sessionStorage.setItem('pessoa', 'fisica'); });

//     contBtnsCarr.appendChild(btnCompCarr);

//     if (doc.querySelector(".card-carreira")) {
//         doc.querySelector(".card-carreira").appendChild(contTitCarr);
//         doc.querySelector(".card-carreira").appendChild(contValCarr);
//         doc.querySelector(".card-carreira").appendChild(contBtnsCarr);
//     }

//     //Removendo borda do menu mobile
//     if (doc.querySelector(".atalhos-mobile") !== null) {
//         doc.querySelector(".atalhos-mobile").classList.remove("borda-principal");
//     }
//     //Removendo fundo-secundario do menu mobile
//     if (doc.querySelector(".atalhos-mobile")) {
//         doc.querySelector(".atalhos-mobile").classList.remove("fundo-secundario");
//     }

//     mostrarModalInstabilidade();
// });

// function mostrarModalInstabilidade() {
//     let modal = `
//         <div id="modalInstabilidade" class="modal in" style="margin-top: 25vh !important" tabindex="-1" aria-labelledby="modalInstabilidade" aria-hidden="false">
//             <div class="modal-header">
//                 <button type="button" class="close closeModalInstabilidade" data-dismiss="modal" aria-hidden="true"><i class="icon-remove"></i></button>
//                 <span class="titulo cor-secundaria">ATENÇÃO!</span>
//             </div>
//             <div class="modal-body borda-principal" style="max-height: fit-content;">
//                 <h4>Informamos que nosso canal de atendimento 0800.7778547 encontra-se com instabilidade.</h4>
//                 <h4>Para atendimento com urgência ou demais informações, utilize o nosso e-mail <a href="mailto:central@laboratoriosodre.com.br">central@laboratoriosodre.com.br</a></h4>
//                 <h4>Pedimos desculpas pelo transtorno, já estamos trabalhando para regularizar o quanto antes.</h4>
//                 <h4>Canais de Acesso</h4>
//             </div>
//             <div class="modal-footer">
//                 <button type="button" class="botao principal closeModalInstabilidade" data-bs-dismiss="modal">OK</button>
//             </div>
//         </div>
//     `;

//     if (sessionStorage.getItem('comunicadoVisualizado') != 'true') {
//         if (typeof $ !== 'undefined') {
//             $('body').append(modal);
//             alternarOpacidadeFundo();

//             $('.closeModalInstabilidade').on('click', function() {
//                 $('#modalInstabilidade').addClass('hide');
//                 alternarOpacidadeFundo(false);
//                 sessionStorage.setItem('comunicadoVisualizado', true);
//             });
//         }
//     }
// }

// function alternarOpacidadeFundo(ofuscar = true) {
//     if (typeof $ !== 'undefined') {
//         $(".conteiner-principal").css("background-color", ofuscar ? "#f4f4f4" : "transparent");
//         $(".conteiner-principal #cabecalho").css("opacity", ofuscar ? "15%" : "100%");
//         $(".conteiner-principal #corpo").css("opacity", ofuscar ? "15%" : "100%");
//         $(".conteiner-principal #rodape").css("opacity", ofuscar ? "15%" : "100%");
//         $(".conteiner-principal .secao-banners").css("opacity", ofuscar ? "15%" : "100%");
//         $(".barra-inicial").css("opacity", ofuscar ? "15%" : "100%");
//     }
// }

// /* ==========================================================
//    CSS RESPONSIVO INJETADO (DESKTOP E MOBILE)
//    ========================================================== */
// ;
// (() => {
//     var s = document.createElement('style');
//     s.textContent = `
//         /* Container Geral dos Cards */
//         .cards-sodre {
//             width: 100%;
//             max-width: 1200px;
//             margin: 20px auto;
//             padding: 0 15px;
//             box-sizing: border-box;
//         }

//         /* Container Flex para os 3 Cards */
//         .cards-sodre .container-cards {
//             display: flex;
//             flex-direction: row;
//             justify-content: center;
//             align-items: stretch;
//             gap: 20px;
//             flex-wrap: wrap;
//         }

//         /* Estilo Individual dos Cards */
//         .card-detran, .card-empresas, .card-carreira {
//             background-color: #ffffff;
//             border: 1px solid #e2e8f0;
//             border-radius: 12px;
//             padding: 24px 20px;
//             box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
//             display: flex;
//             flex-direction: column;
//             justify-content: space-between;
//             flex: 1 1 300px;
//             max-width: 360px;
//             box-sizing: border-box;
//             text-align: center;
//         }

//         /* Cabeçalho do Card */
//         .container-titulo .texto-container-titulo {
//             font-size: 1.5rem;
//             font-weight: 700;
//             margin: 0 0 5px 0;
//             color: #1a202c;
//         }
//         .container-titulo .texto-container-subtitulo {
//             font-size: 1.1rem;
//             font-weight: 600;
//             margin: 0 0 4px 0;
//             color: #4a5568;
//         }
//         .container-titulo .texto-container-descricao {
//             font-size: 0.9rem;
//             font-weight: 400;
//             margin: 0;
//             color: #718096;
//         }
//         .card-divisor {
//             height: 2px;
//             background-color: #edf2f7;
//             margin: 15px 0;
//             width: 100%;
//         }

//         /* Bloco de Preço */
//         .container-valor {
//             margin: 15px 0;
//         }
//         .qtde-parcelas-valor {
//             font-size: 0.9rem;
//             color: #718096;
//             margin: 0;
//         }
//         .container-preco {
//             display: flex;
//             justify-content: center;
//             align-items: baseline;
//             gap: 4px;
//             margin: 5px 0;
//         }
//         .unidade-preco {
//             font-size: 1.2rem;
//             font-weight: 600;
//             margin: 0;
//             color: #2d3748;
//         }
//         .valor-preco {
//             font-size: 2.8rem;
//             font-weight: 800;
//             line-height: 1;
//             margin: 0;
//             color: #2d3748;
//         }
//         .valor-total {
//             font-size: 0.95rem;
//             font-weight: 700;
//             margin: 5px 0 0 0;
//             color: #2d3748;
//         }
//         .aviso-consultar-valor {
//             font-size: 0.75rem;
//             color: #a0aec0;
//             margin: 6px 0 0 0;
//         }

//         /* Botões */
//         .container-btns {
//             display: flex;
//             flex-direction: column;
//             gap: 10px;
//             margin-top: 15px;
//         }
//         .btn-card {
//             display: block;
//             width: 100%;
//             padding: 12px 16px;
//             background-color: #0056b3;
//             color: #ffffff !important;
//             text-decoration: none !important;
//             border-radius: 6px;
//             font-weight: 700;
//             font-size: 0.95rem;
//             text-align: center;
//             box-sizing: border-box;
//             transition: background-color 0.2s ease-in-out;
//         }
//         .btn-card:hover {
//             background-color: #003d80;
//         }

//         /* Card de Aviso (Comunicado) */
//         .card-aviso {
//             background-color: #fff8e6;
//             border: 1px solid #ffe58f;
//             border-radius: 8px;
//             padding: 16px;
//             margin-top: 25px;
//             text-align: center;
//         }
//         .card-aviso .titulo-aviso {
//             color: #d48806;
//             font-size: 1.1rem;
//             font-weight: 700;
//             margin: 0 0 8px 0;
//         }
//         .card-aviso .texto-aviso {
//             color: #595959;
//             font-size: 0.85rem;
//             line-height: 1.5;
//             margin: 0;
//         }

//         /* AJUSTES ESPECÍFICOS PARA DISPOSITIVOS MÓVEIS (MOBILE) */
//         @media (max-width: 768px) {
//             .cards-sodre .container-cards {
//                 flex-direction: column;
//                 align-items: center;
//             }
//             .card-detran, .card-empresas, .card-carreira {
//                 width: 100%;
//                 max-width: 100%;
//             }
//         }

//         /* Regras antigas mantidas para a loja integrada */
//         @media(min-width: 980px){
//             .pagina-inicial .s26-product__body:after {
//                 content: "";
//                 display: block !important;
//                 position: absolute;
//                 left: 0; right: 0; bottom: 18px;
//                 height: 50px;
//                 background: #f3f3f5;
//                 z-index: 20;
//             }
//             .pagina-inicial .cards-sodre.s26-products .s26-product__actions {
//                 opacity: 1 !important;
//                 left: 0 !important;
//                 width: 100% !important;
//                 display: flex !important;
//                 justify-content: center !important;
//                 z-index: 30 !important;
//             }
//         }
//     `;
//     document.head.appendChild(s);
// })();
window.addEventListener('DOMContentLoaded', function() {
    sessionStorage.setItem('finalidade', '');
    sessionStorage.setItem("SKU", "");
    sessionStorage.setItem("codConcurso", "");

    function generate_uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var uuid = Math.random() * 16 | 0,
                v = c == 'x' ? uuid : (uuid & 0x3 | 0x8);
            return uuid.toString(16);
        });
    }

    if (!sessionStorage.getItem('idSession')) {
        sessionStorage.setItem('idSession', generate_uuidv4());
    }

    let doc = document;

    // Remover elementos padrão da página
    if (doc.querySelector("#listagemProdutos")) {
        doc.querySelector("#listagemProdutos").parentElement.remove();
    }
    if (doc.querySelector(".secao-banners .banner.cheio .flexslider")) {
        doc.querySelector(".secao-banners .banner.cheio .flexslider").remove();
    }

    let target = doc.querySelector(".secao-banners .banner.cheio div");
    if (!target) return;

    // Injeção de Estilos CSS via JS Puro
    let style = doc.createElement('style');
    style.textContent = `
        .sodre-slider-container {
            position: relative;
            width: 100%;
            max-width: 1140px;
            margin: 20px auto;
            padding: 0 40px;
            box-sizing: border-box;
        }
        .sodre-track {
            display: flex;
            gap: 20px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            padding: 10px 0;
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .sodre-track::-webkit-scrollbar {
            display: none;
        }
        .sodre-slide {
            flex: 0 0 100%;
            scroll-snap-align: center;
            box-sizing: border-box;
        }
        @media (min-width: 769px) {
            .sodre-slide {
                flex: 0 0 calc(33.333% - 14px);
            }
        }
        .sodre-card-wrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .sodre-card {
            background: #f2f3f7;
            border-radius: 24px;
            padding: 20px 20px 25px 20px;
            text-align: center;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            max-width: 340px;
            min-height: 390px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.04);
        }
        /* Topo Emblema com Gradiente Roxo-Rosa */
        .sodre-badge {
            background: linear-gradient(90deg, #2e1a82 0%, #e6005c 100%);
            color: #ffffff;
            font-weight: 800;
            font-size: 1.15rem;
            padding: 10px 20px;
            border-radius: 30px;
            width: 95%;
            box-sizing: border-box;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 12px;
            box-shadow: 0 3px 8px rgba(0,0,0,0.15);
        }
        .sodre-info {
            color: #4a5068;
            font-size: 0.95rem;
            line-height: 1.4;
            margin-bottom: 10px;
        }
        .sodre-info strong {
            display: block;
            font-size: 1.05rem;
            color: #333333;
            margin-bottom: 2px;
        }
        /* Layout do Preço */
        .sodre-price-container {
            margin: 10px 0;
            text-align: center;
        }
        .sodre-price-row {
            display: flex;
            align-items: baseline;
            justify-content: center;
            gap: 4px;
        }
        .sodre-price-prefix {
            font-size: 0.85rem;
            font-weight: 700;
            color: #333333;
        }
        .sodre-price-currency {
            font-size: 1.4rem;
            font-weight: 800;
            color: #c4003d;
        }
        .sodre-price-val {
            font-size: 1.7rem;
            font-weight: 800;
            color: #c4003d;
        }
        .sodre-price-sub {
            font-size: 0.82rem;
            color: #555555;
            margin-top: 4px;
        }
        /* Botões Arredondados Roxos */
        .sodre-btns {
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 100%;
            max-width: 260px;
            margin-top: 10px;
        }
        .sodre-btn {
            background: #281e8c;
            color: #ffffff !important;
            text-decoration: none !important;
            font-weight: 700;
            font-size: 1rem;
            padding: 12px 20px;
            border-radius: 30px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition: background 0.2s, transform 0.1s;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 10px rgba(40, 30, 140, 0.2);
        }
        .sodre-btn:hover {
            background: #1f166f;
        }
        .sodre-footer-text {
            font-size: 0.82rem;
            color: #666666;
            text-align: center;
            margin-top: 12px;
        }
        /* Setas do Carrossel */
        .sodre-arrow {
            position: absolute;
            top: 42%;
            transform: translateY(-50%);
            width: 38px;
            height: 38px;
            border-radius: 50%;
            background: #ffffff;
            border: 2px solid #e6005c;
            color: #e6005c;
            font-size: 1.2rem;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 10;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15);
            user-select: none;
            transition: background 0.2s, color 0.2s;
        }
        .sodre-arrow:hover {
            background: #e6005c;
            color: #ffffff;
        }
        .sodre-arrow-prev { left: 0px; }
        .sodre-arrow-next { right: 0px; }

        .sodre-notice {
            background: #fff8e6;
            border: 1px solid #ffe58f;
            border-radius: 12px;
            padding: 16px;
            margin: 25px auto 0 auto;
            max-width: 1140px;
            text-align: center;
        }
        .sodre-notice h4 { color: #d48806; font-size: 1.05rem; font-weight: 700; margin: 0 0 8px 0; }
        .sodre-notice p { color: #555; font-size: 0.85rem; line-height: 1.5; margin: 0; }
    `;
    doc.head.appendChild(style);

    // Injeção da Estrutura HTML dos Cards
    let sliderHTML = `
        <div class="sodre-slider-container">
            <button type="button" class="sodre-arrow sodre-arrow-prev" aria-label="Anterior">&#10094;</button>
            <div class="sodre-track">
                <!-- CARD 1: DETRAN -->
                <div class="sodre-slide">
                    <div class="sodre-card-wrapper">
                        <div class="sodre-card">
                            <div class="sodre-badge">DETRAN</div>
                            <div class="sodre-info">
                                <strong>Exame Toxicológico CNH</strong>
                                (Categorias C/D/E)
                            </div>
                            <div class="sodre-price-container">
                                <div class="sodre-price-row">
                                    <span class="sodre-price-prefix">A partir de</span>
                                    <span class="sodre-price-currency">R$</span>
                                    <span class="sodre-price-val">149,00</span>
                                </div>
                                <div class="sodre-price-sub">ou em até 5x de R$29,80 sem juros</div>
                            </div>
                            <div class="sodre-btns">
                                <a href="/pagina/selecionar-ponto-de-coleta.html" class="sodre-btn btn-cpf-det">Compra por CPF &#x2197;</a>
                                <a href="/pagina/selecionar-ponto-de-coleta.html" class="sodre-btn btn-cnpj-det">Compra por CNPJ &#x2197;</a>
                            </div>
                        </div>
                        <div class="sodre-footer-text">Consulte o valor de acordo com a região</div>
                    </div>
                </div>

                <!-- CARD 2: EMPRESAS -->
                <div class="sodre-slide">
                    <div class="sodre-card-wrapper">
                        <div class="sodre-card">
                            <div class="sodre-badge">EMPRESAS</div>
                            <div class="sodre-info">
                                <strong>Exame Toxicológico CLT</strong>
                                (Lei 13.103 e Portaria MTPS nº 642)
                            </div>
                            <div class="sodre-price-container">
                                <div class="sodre-price-row">
                                    <span class="sodre-price-prefix">A partir de</span>
                                    <span class="sodre-price-currency">R$</span>
                                    <span class="sodre-price-val">149,00</span>
                                </div>
                                <div class="sodre-price-sub">ou em até 5x de R$29,80 sem juros</div>
                            </div>
                            <div class="sodre-btns">
                                <a href="/pagina/selecionar-ponto-de-coleta.html" class="sodre-btn btn-cnpj-emp">Compra por CNPJ &#x2197;</a>
                            </div>
                        </div>
                        <div class="sodre-footer-text">Consulte o valor de acordo com a região</div>
                    </div>
                </div>

                <!-- CARD 3: CONCURSO PÚBLICO -->
                <div class="sodre-slide">
                    <div class="sodre-card-wrapper">
                        <div class="sodre-card">
                            <div class="sodre-badge">CONCURSO PÚBLICO</div>
                            <div class="sodre-info">
                                <strong>Concursos Públicos</strong>
                                Diversos Cargos
                            </div>
                            <div class="sodre-price-container">
                                <div class="sodre-price-row">
                                    <span class="sodre-price-prefix">A partir de</span>
                                    <span class="sodre-price-currency">R$</span>
                                    <span class="sodre-price-val">169,90</span>
                                </div>
                                <div class="sodre-price-sub">ou em até 5x de R$33,98 sem juros</div>
                            </div>
                            <div class="sodre-btns">
                                <a href="/pagina/selecionar-ponto-de-coleta.html" class="sodre-btn btn-carr">Compre Agora &#x2197;</a>
                            </div>
                        </div>
                        <div class="sodre-footer-text">Consulte o valor de acordo com a região</div>
                    </div>
                </div>
            </div>
            <button type="button" class="sodre-arrow sodre-arrow-next" aria-label="Próximo">&#10095;</button>
        </div>

        <div class="sodre-notice">
            <h4>COMUNICADO MOTORISTA</h4>
            <p>Àqueles que realizaram exames toxicológicos na rede de laboratórios do Laboratório Sodré no período de 12/04/2021 a 31/05/2021: O Laboratório Sodré se compromete a realizar para eles, sem custos, novos exames toxicológicos, desde que solicitados até 10/10/2024, através do número 0800 777 8547. Nessas oportunidades, serão agendados as datas e os locais das respectivas coletas de material biológico, bem como dadas informações necessárias à realização desses novos exames gratuitos.</p>
        </div>
    `;

    let wrapper = doc.createElement('div');
    wrapper.innerHTML = sliderHTML;
    target.appendChild(wrapper);

    // Navegação em JS Puro das Setas do Carrossel
    let track = wrapper.querySelector('.sodre-track');
    let prevBtn = wrapper.querySelector('.sodre-arrow-prev');
    let nextBtn = wrapper.querySelector('.sodre-arrow-next');

    if (track && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function() {
            let slideWidth = track.querySelector('.sodre-slide').offsetWidth + 20;
            track.scrollBy({ left: -slideWidth, behavior: 'smooth' });
        });
        nextBtn.addEventListener('click', function() {
            let slideWidth = track.querySelector('.sodre-slide').offsetWidth + 20;
            track.scrollBy({ left: slideWidth, behavior: 'smooth' });
        });
    }

    // Handlers para sessionStorage
    wrapper.querySelector(".btn-cpf-det") ? .addEventListener("click", function() { sessionStorage.setItem('finalidade', 'CNH');
        sessionStorage.setItem('pessoa', 'fisica'); });
    wrapper.querySelector(".btn-cnpj-det") ? .addEventListener("click", function() { sessionStorage.setItem('finalidade', 'CNH');
        sessionStorage.setItem('pessoa', 'juridica'); });
    wrapper.querySelector(".btn-cnpj-emp") ? .addEventListener("click", function() { sessionStorage.setItem('finalidade', 'CLT');
        sessionStorage.setItem('pessoa', 'juridica'); });
    wrapper.querySelector(".btn-carr") ? .addEventListener("click", function() { sessionStorage.setItem('finalidade', 'Concurso');
        sessionStorage.setItem('pessoa', 'fisica'); });

    mostrarModalInstabilidade();
});

function mostrarModalInstabilidade() {
    let modal = `
        <div id="modalInstabilidade" class="modal in" style="margin-top: 25vh !important" tabindex="-1">
            <div class="modal-header">
                <button type="button" class="close closeModalInstabilidade" data-dismiss="modal"><i class="icon-remove"></i></button>
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

    if (sessionStorage.getItem('comunicadoVisualizado') != 'true' && typeof $ !== 'undefined') {
        $('body').append(modal);

        $('.closeModalInstabilidade').on('click', function() {
            $('#modalInstabilidade').addClass('hide');
            sessionStorage.setItem('comunicadoVisualizado', true);
        });
    }
}