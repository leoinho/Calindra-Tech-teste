import Fita from '../../assets/img/fita.png';

import "../../assets/sass/_geral.scss";
import './Banner.scss';

function Banner() {
  return (
    <div className="container banner">
        <div>
            <h1>
            Measuring <br/>
            everything
            </h1>
        </div>
        <div className="imagem">
        <img src={Fita}/>
        </div>
    </div>
  );
}

export default Banner;
 