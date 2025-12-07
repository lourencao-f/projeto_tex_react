export default function Footer() {
    return (
        <footer id="contato">
            <div className="container footer-grid">

                <div className="footer-col">
                    <img className="logo-img reveal" src="/assets/img/logo.jpg" alt="Logo TEX" />

                    <p>
                        PROJETOS MECÂNICOS EM 3D SOLID WORKS / AUTO CAD, CONSULTORIA, IMPRESSÃO 3D, SERVIÇOS DE USINAGEM FRESA E TORNO CNC, SERVIÇOS DE CORTE A LASER.
                    </p>

                    <div className="social">
                        <a href="#"><img src={import.meta.env.BASE_URL + '/assets/icons/instagram.png'} className="icon-social" alt="Instagram" /></a>
                        <a href="#"><img src={import.meta.env.BASE_URL + 'assets/icons/linkedin.png'} className="icon-social" alt="LinkedIn" /></a>
                        <a href="#"><img src={import.meta.env.BASE_URL + 'assets/icons/whatapp.png'} className="icon-social" alt="WhatsApp" /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h3>Contato</h3>
                    <p>contato@texengenharia.com.br</p>
                    <p>(11) 99999-9999</p>
                </div>

            </div>
        </footer>
    );
}
