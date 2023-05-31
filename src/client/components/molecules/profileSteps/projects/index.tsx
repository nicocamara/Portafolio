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
          <div key={index}>
            <div>{skill.workSkills}</div>
            <div>{skill.softSkills}</div>
            <div>{skill.teachSkills}</div>
            <div>{skill.coverLetter}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
