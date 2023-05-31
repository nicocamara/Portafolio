import './styles.scss';
import { Portfolio } from '../../../../utils/Type';

type contactProps = {
  date: Portfolio;
};

const Contact = ({ date }: contactProps) => {
  console.log('los datos rey', date);
  return (
    <div className="contact">
      <div>{date.overview.firstName}</div>)<div>{date.overview.lastName}</div>
      <div>{date.overview.birthDate}</div>
      <div>{date.overview.email}</div>
      <div>{date.overview.phone}</div>
      <div>{date.overview.country}</div>
      <div>{date.overview.city}</div>
      <div>{date.overview.street}</div>
    </div>
  );
};

export default Contact;
