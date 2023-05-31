import './styles.scss';
import { Portfolio } from '../../../../utils/Type';

type ResumeProps = {
  date: Portfolio;
};

const Resume = ({ date }: ResumeProps) => {
  console.log('los datos rey', date);
  return (
    <div className="contact">
      <div>
        {date.education.map((education, index) => (
          <div key={index}>
            <div>{education.institution}</div>
            <div>{education.title}</div>
            <div>{education.startDate}</div>
            <div>{education.actuality ? 'I Keep Studing' : education.endDate}</div>
            <div>{education.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
