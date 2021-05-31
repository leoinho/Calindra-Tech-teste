import Youtube from '../svg/Youtube';
import Facebook from '../svg/Facebook';
import Twitter from '../svg/Twitter';

import "../../assets/sass/_geral.scss";
import './Footer.scss';

function Banner() {
  return (
    <div className="container footer">
        <div className="bloco">
            <h1>Follow Us</h1>
            <div className="icones-redes-sociais">
                <Youtube />
                <Facebook />
                <Twitter />
            </div>
        </div>
        <div className="bloco">
            <h1>Contact</h1>
            <div className="contatos">
               <ul>
                   <li>2490 Leisure Lane</li>
                   <li>San Luis Obispo</li>
                   <li>California</li>
               </ul>
            </div>
        </div>
        <div></div>
    </div>
  );
}

export default Banner;
 