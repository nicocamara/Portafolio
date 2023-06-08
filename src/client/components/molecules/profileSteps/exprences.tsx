import { Portfolio } from '../../../utils/Type';
import './styles.scss';

type experiencesProps = {
  date: Portfolio;
};

const Experiences = ({ date }: experiencesProps) => {
  console.log('los datos rey', date);
  return (
    <div className="contact">
      <div className="dvContainer">
        <div className="dvContainer__title">Education Date</div>
        <hr className="dvContainer__line" />
        <div className="dvContainer__container">
          <div>
            {date.job.map((job, index) => (
              <div key={index}>
                <div className="dvContainer__subtitle">
                  Employer
                  <hr className="dvContainer__overline" />
                </div>
                <div className="dvContainer__date">
                  <div>{job.employer}</div>
                </div>
                <div className="dvContainer__subtitle">
                  Title of ther carrer
                  <hr className="dvContainer__overline" />
                </div>
                <div className="dvContainer__date">
                  <div>{job.title}</div>
                </div>
                <div className="dvContainer__container">
                  <div className="dvContainer__subtitle">
                    Contact Data
                    <hr className="dvContainer__overline" />
                  </div>
                  <div className="dvContainer__subcontainer">
                    <div className="dvContainer__date">
                      <span className="dvContainer__span">Start Date</span>
                      <div>{job.startDate}</div>
                    </div>
                    <div className="dvContainer__date">
                      <span className="dvContainer__span">End Date</span>
                      <div>{job.actuality ? 'I Keep Studing' : job.endDate}</div>
                    </div>
                  </div>
                </div>
                <div className="dvContainer__subtitle">
                  Description
                  <hr className="dvContainer__overline" />
                </div>
                <div className="dvContainer__date">
                  <div>{job.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
