import logo from './logo.png';
import yellow from './yellow-ab.png'
import './Menu.css'

export default function Menu() {
    return (
        <header>
          <img
          className="logo"
          src={logo}
          alt="Casa Verde Logo"
          />
          <img
          className="yellow-ab"
          src={yellow}
          alt="Casa Verde Logo"
          />

          <ul>
            <li>Como Fazer</li>
            <p>/</p>
            <li>Ofertas</li>
            <p>/</p>
            <li>Depoimentos</li>
            <p>/</p>
            <li>Vídeos</li>
            <p>/</p>
            <li>Meu Carrinho</li>
          </ul>

        </header>
     );
}