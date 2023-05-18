import { useContext } from 'react';
import StateContext from '../../../utils/stateContext';
import './styles.scss';

const Contact = () => {
  const { myPortfolio } = useContext(StateContext);

  return (
    <div className="contact">
      <h5>Get in touch whit Me</h5>
      <div className="contact__adress" key={myPortfolio!.id}>
        <div className="contact__data">Name: {myPortfolio!.firstName}</div>
        <div className="contact__data">Last Name: {myPortfolio!.lastName}</div>
        <div className="contact__data">Country: {myPortfolio!.country}</div>
        <div className="contact__data">City: {myPortfolio!.city}</div>
        <div className="contact__data">Current Position:{myPortfolio!.currentPosition}</div>
        <div className="contact__data">Description Job: {myPortfolio!.descritionJob}</div>
      </div>

      <div className="contact__map">
        <iframe
          width="100%"
          height="100%"
          title="map"
          className="absolute inset-0"
          // frameBorder={0}
          // marginHeight={0}
          // marginWidth={0}
          style={{ filter: 'opacity(0.7)' }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.2856954813146!2d-64.21497660000001!3d-31.4062538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298971ae48789%3A0xd05f29d532c6f8bb!2sDe%C3%A1n%20Funes%202448%2C%20X5003CVR%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1683210064038!5m2!1ses!2sar"
        />
      </div>
    </div>
  );
};

export default Contact;
