import planta from './imagem-hero.png'
import mail from './mail.png'

import './NewsLetter.css'
export default function AssinaturaNewsletter() {
    return (
        <div className='News'>
            <div className='text'>
                <p className='first-text'>Sua casa com as</p>
                <h1>melhores plantas</h1> 
                <p className='sub-text'>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
            
                <div className="mail-box">
                    <img
                    className="mail-icon"
                    src={mail}
                    alt="mail"
                    />
                    <input type="text" className='mail-input' placeholder='Insira seu e-mail'/>
                    <button type="button">Assinar NewsLetter</button>
                </div>

                

            </div>

            <div className='img'>
                <img
                className="planta"
                src={planta}
                alt="planta"
                />
            </div>
        </div>
     );
}