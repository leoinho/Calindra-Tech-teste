import Fita3 from '../../assets/img/fita-descricao.png';

import "../../assets/sass/_geral.scss";
import './Descricao.scss';

function Descricao() {
  return (
    <div className="container descricao">
        <div className=" texto">
            <h1>
                We are Leader<br/>
                in Measure Tapes
            </h1>

            <p>
                There are 5x the <br/>
                circumference of planet <br/>
                earth in metric tapes.
            </p>
        </div>
        <div className="mobile imagem">
         <img src={Fita3}/> 
        </div>
    </div>
  );
}

export default Descricao;
 