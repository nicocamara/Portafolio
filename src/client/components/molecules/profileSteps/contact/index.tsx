import './styles.scss';
import { Portfolio } from '../../../../utils/Type';

type contactProps = {
  date: Portfolio;
};

const Contact = ({ date }: contactProps) => {
  console.log('los datos rey', date);
  return (
    <div className="contact">
      <div className="dvContainer">
        <div className="dvContainer__title">Contact Date</div>
        <hr className="dvContainer__line" />
        <div className="dvContainer__date">FirstName: {date.overview.firstName}</div>
        <div className="dvContainer__date">LastName: {date.overview.lastName}</div>
        <div className="dvContainer__date">BirthDate: {date.overview.birthDate}</div>
        <div className="dvContainer__date">E-mail: {date.overview.email}</div>
        <div className="dvContainer__date">Phone: {date.overview.phone}</div>
        <div className="dvContainer__date">Country: {date.overview.country}</div>
        <div className="dvContainer__date">City: {date.overview.city}</div>
        <div className="dvContainer__date">Street: {date.overview.street}</div>
      </div>
    </div>
  );
};

export default Contact;
