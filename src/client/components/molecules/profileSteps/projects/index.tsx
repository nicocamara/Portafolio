import './styles.scss';
import { Portfolio } from '../../../../utils/Type';

type projectsProps = {
  date: Portfolio;
};

const Projects = ({ date }: projectsProps) => {
  console.log('los datos rey', date);
  return (
    <div className="contact">
      <div>
        {date.skills.map((skill, index) => (
          <div className="dvContainer" key={index}>
            <div className="dvContainer__date">{skill.workSkills}</div>
            <div className="dvContainer__date">{skill.softSkills}</div>
            <div className="dvContainer__date">{skill.teachSkills}</div>
            <div className="dvContainer__date">{skill.coverLetter}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
