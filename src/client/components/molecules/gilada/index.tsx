import getAssetUrl from '../../../utils/getAssetUrl';
import Icons from '../../atoms/icons';
import './style.scss';

const Gilada = () => (
  <div className="gilada">
    <img className="gilada__foto" src={getAssetUrl('nicoPerfil.png')} />
    <div className="gilada__logos">
      <Icons path="linkedin" alt="linkedin" className="linkedin" link="https://www.linkedin.com/in/nicolas-camara/" />
      <Icons path="facebook" alt="facebook" className="linkedin" link="https://www.facebook.com/pato.camara.7/" />
      <Icons path="github" alt="github" className="linkedin" link="https://github.com/Nico-app" />
      <Icons path="instagram" alt="instagram" className="linkedin" link="https://www.instagram.com/nico.cam/" />
    </div>
    <div className="gilada__buttons">
      <button>Download</button>
      <button>Contact</button>
    </div>
  </div>
);

export default Gilada;
