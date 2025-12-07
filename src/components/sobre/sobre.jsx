export default function Sobre() {
    return (
        <section id="sobre" className="sobre">
            <div className="container">
                {/* O título foi removido no HTML, mantendo igual */}
            </div>

            <div className="sobre-blocos">

                {/* BLOCO 1 — Projetos Mecânicos */}
                <div className="sobre-bloco" id="projetos-mecanicos">
                    <div className="texto reveal">
                        <h4>Projetos Mecânicos</h4>
                        <span>
                            Desenvolvemos a documentação técnica de produtos e componentes em um ambiente virtual através de softwares de engenharia.
                        </span>

                        <p>
                            São realizados os desenhos técnicos dos produtos, detalhando dimensões, especificações, materiais e instruções necessárias para fabricação.
                            Geramos arquivos auxiliares (IGS, DXF, STL) que viabilizam a fabricação em corte a laser, CNC, dobra etc.
                            Fornecemos desenhos de montagem com lista de componentes.
                        </p>

                        <a className="btn-download" href="/assets/pdf/projetos-mecanicos.pdf" download="projetos-mecanicos.pdf">
                            Baixar PDF Projetos Mecânicos
                        </a>
                    </div>

                    <img className="reveal" src="/assets/img/projetos_mecanicos.jpg" alt="Projetos Mecânicos" />
                </div>

                {/* BLOCO 2 — Impressão 3D */}
                <div className="sobre-bloco" id="impressao-3d">
                    <img className="reveal" src="/assets/img/impressora_3d.jpg" alt="Impressão 3D" />

                    <div className="texto reveal">
                        <h4>Impressão 3D</h4>
                        <span>
                            Fabricamos peças plásticas rígidas ou flexíveis, desde decorativas até técnicas, com precisão dimensional.
                        </span>

                        <p>
                            Realizamos escaneamento digital via scanner ou microscópio, gerando modelos 3D precisos.
                            Ideal para produção de pequenos e médios lotes sem necessidade de moldes.
                        </p>

                        <p>
                            Se você já possui o modelo 3D, envie via WhatsApp com nome e e-mail. Respondemos rapidamente.
                        </p>
                    </div>
                </div>

                {/* BLOCO 3 — Usinagem */}
                <div className="sobre-bloco" id="usinagem">
                    <div className="texto reveal">
                        <h4>Usinagem</h4>
                        <span>Realizamos serviços de Usinagem em Torno CNC para peças industriais.</span>

                        <p>
                            Atendemos peças pequenas e robustas, em materiais ferrosos e não ferrosos.
                            Conferimos todas as formas e dimensões para garantir qualidade final.
                        </p>

                        <a className="btn-download" href="/assets/pdf/usinagem.pdf" download>
                            Baixar PDF Usinagem
                        </a>
                    </div>

                    <img className="reveal" src="/assets/img/usinagem.jpg" alt="Usinagem" />
                </div>

                {/* BLOCO 4 — Corte a Laser */}
                <div className="sobre-bloco" id="corte-laser">
                    <img className="reveal" src="/assets/img/corte_a_laser.jpg" alt="Corte a Laser" />

                    <div className="texto reveal">
                        <h4>Corte a Laser</h4>
                        <span>Corte preciso em alumínio, aço carbono e inox.</span>

                        <p>
                            O laser garante alta precisão, ótimo acabamento e melhor aproveitamento da chapa.
                            Resultado: mais rapidez, qualidade e custo-benefício.
                        </p>
                    </div>
                </div>

                {/* BLOCO 4 — Corte a Laser */}
                <div className="sobre-bloco" id="automacao">

                    <div className="texto reveal">                        <h4>Automação</h4>
                        <span>texto texto</span>
                        <p>
                            texto texto texto
                        </p>
                        <a className="btn-download" href="/assets/pdf/automacao.pdf" download="automacao.pdf">
                            Baixar PDF Automação
                        </a>
                    </div>
                    <img className="reveal" src="/assets/img/automacao.jpg" alt="Corte a Laser" />
                </div>

            </div>
        </section>
    );
}
