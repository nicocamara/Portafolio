import { useRef } from 'react';
import useMousePosition from '../../utils/useMousePosition';
import './style.scss';

const Home = () => {
  const element1Ref = useRef<HTMLDivElement>(null);
  const element2Ref = useRef<HTMLDivElement>(null);
  const element3Ref = useRef<HTMLDivElement>(null);
  const element4Ref = useRef<HTMLDivElement>(null);
  const element5Ref = useRef<HTMLDivElement>(null);
  const element6Ref = useRef<HTMLDivElement>(null);

  const [element1Shawdow, element2Shadow, element3Shawdow, element4Shawdow, element5Shawdow, element6Shawdow] =
    useMousePosition([element1Ref, element2Ref, element3Ref, element4Ref, element5Ref, element6Ref]);

  return (
    <div className="home">
      <div className="home__overview home__section">
        <div className="home__overview-container">
          <div
            className="home__overview-text"
            style={{ textShadow: `${element1Shawdow?.shadowX}px ${element1Shawdow?.shadowY}px 3px #898999` }}
            ref={element1Ref}
          >
            Your professional portfolio whenever you need it
          </div>
          <div
            className="home__overview-text"
            style={{ textShadow: `${element2Shadow?.shadowX}px ${element2Shadow?.shadowY}px 3px #898999` }}
            ref={element2Ref}
          >
            just at 1 hhtp request away
          </div>
          <div
            className="home__overview-text"
            style={{ textShadow: `${element3Shawdow?.shadowX}px ${element3Shawdow?.shadowY}px 3px #898999` }}
            ref={element3Ref}
          >
            Get a unique URL path that includes your username with public access
          </div>
          <div
            className="home__overview-text"
            style={{ textShadow: `${element4Shawdow?.shadowX}px ${element4Shawdow?.shadowY}px 3px #898999` }}
            ref={element4Ref}
          >
            Create a professional portfolio to showcase vital information to potential employers
          </div>
          <div
            className="home__overview-text"
            style={{ textShadow: `${element5Shawdow?.shadowX}px ${element5Shawdow?.shadowY}px 3px #898999` }}
            ref={element5Ref}
          >
            Manage your profile data, including overview, education, skills, projects, experience
          </div>
          <div
            className="home__overview-text"
            style={{ textShadow: `${element6Shawdow?.shadowX}px ${element6Shawdow?.shadowY}px 3px  #898999` }}
            ref={element6Ref}
          >
            Upload/download CV and cover letter pdf
          </div>

          <div className="home__section home__features">FEATURES</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
