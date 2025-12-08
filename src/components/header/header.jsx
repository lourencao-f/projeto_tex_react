export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo"></div>

        <nav className="nav-menu">
          <a href="#projetos-mecanicos">Projetos Mecânicos</a>
          <a href="#impressao-3d">Impressão 3D</a>
          <a href="#usinagem">Usinagem</a>
          <a href="#corte-laser">Corte a Laser</a> 
          <a href="#automacao">Automação</a>               
        </nav>
      </div>
    </header>
  );
}
