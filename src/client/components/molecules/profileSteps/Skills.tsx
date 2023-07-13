import { Portfolio } from '../../../utils/Type';
import './styles.scss';

type SkillsProps = {
  date: Portfolio;
};

const Skills = ({ date }: SkillsProps) => (
  <div className="contact">
    <div>
      <div className="dvContainer">
        <div className="dvContainer__title">Skills Date</div>
        <hr className="dvContainer__line" />
        <div className="dvContainer__container">
          <div className="dvContainer__subtitle">
            Work Skills
            <hr className="dvContainer__overline" />
          </div>
          <div className="dvContainer__date">{date.skills.workSkills}</div>
          <div className="dvContainer__subtitle">
            Soft Skills
            <hr className="dvContainer__overline" />
          </div>
          <div className="dvContainer__date">{date.skills.softSkills}</div>
          <div className="dvContainer__subtitle">
            Tech Skills
            <hr className="dvContainer__overline" />
          </div>
          <div className="dvContainer__date">{date.skills.teachSkills}</div>
          <div className="dvContainer__subtitle">
            Cover Letter
            <hr className="dvContainer__overline" />
          </div>
          <div className="dvContainer__date">{date.skills.coverLetter}</div>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
