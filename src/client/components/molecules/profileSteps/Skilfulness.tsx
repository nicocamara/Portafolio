import { Portfolio } from '../../../utils/Type';
import './styles.scss';

type SkilfulnessProps = {
  date: Portfolio;
};

const Skilfulness = ({ date }: SkilfulnessProps) => (
  <div className="contact">
    <div>
      {date.skills.map((skill, index) => (
        <div className="dvContainer" key={index}>
          <div className="dvContainer__title">Skills Date</div>
          <hr className="dvContainer__line" />
          <div className="dvContainer__container">
            <div className="dvContainer__subtitle">
              Work Skills
              <hr className="dvContainer__overline" />
            </div>
            <div className="dvContainer__date">{skill.workSkills}</div>
            <div className="dvContainer__subtitle">
              Soft Skills
              <hr className="dvContainer__overline" />
            </div>
            <div className="dvContainer__date">{skill.softSkills}</div>
            <div className="dvContainer__subtitle">
              Tech Skills
              <hr className="dvContainer__overline" />
            </div>
            <div className="dvContainer__date">{skill.teachSkills}</div>
            <div className="dvContainer__subtitle">
              Cover Letter
              <hr className="dvContainer__overline" />
            </div>
            <div className="dvContainer__date">{skill.coverLetter}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skilfulness;
