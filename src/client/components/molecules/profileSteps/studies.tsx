import './styles.scss';
import { Portfolio } from '../../../utils/Type';

type EducationProps = {
  date: Portfolio;
};

const Studies = ({ date }: EducationProps) => {
  console.log();
  return (
    <div className="contact">
      <div className="dvContainer">
        <div className="dvContainer__title">Education Date</div>
        <hr className="dvContainer__line" />
        <div className="dvContainer__container">
          <div>
            {date.education.map((education, index) => (
              <div key={index}>
                <div className="dvContainer__subtitle">
                  Instituction
                  <hr className="dvContainer__overline" />
                </div>
                <div className="dvContainer__date">
                  <div>{education.institution}</div>
                </div>
                <div className="dvContainer__subtitle">
                  Title of ther carrer
                  <hr className="dvContainer__overline" />
                </div>
                <div className="dvContainer__date">
                  <div>{education.title}</div>
                </div>
                <div className="dvContainer__container">
                  <div className="dvContainer__subtitle">
                    Contact Data
                    <hr className="dvContainer__overline" />
                  </div>
                  <div className="dvContainer__subcontainer">
                    <div className="dvContainer__date">
                      <span className="dvContainer__span">Start Date</span>
                      <div>{education.startDate}</div>
                    </div>
                    <div className="dvContainer__date">
                      <span className="dvContainer__span">End Date</span>
                      <div>{education.actuality ? 'I Keep Studing' : education.endDate}</div>
                    </div>
                  </div>
                </div>
                <div className="dvContainer__subtitle">
                  Description
                  <hr className="dvContainer__overline" />
                </div>
                <div className="dvContainer__date">
                  <div>{education.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studies;
