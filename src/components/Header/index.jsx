import LogoProjetar from "../../assets/MarcaEmpresa.png"

export function Header() {
  return (
    <header>
      <div>
        <img src={LogoProjetar} alt="Logo Porjetar Esquadrias" />
      </div>
      <label>
        <nav>Sobre nós</nav>
        <nav>Contato</nav>
        <nav>Catálogo</nav>
      </label>
    </header>
  )

}