import { useRef } from 'react';
import useMousePositionBackground from '../../utils/useMousePositionBackground';
import './style.scss';

const Home = () => {
  const element1Ref = useRef<HTMLDivElement>(null);
  // const element2Ref = useRef<HTMLDivElement>(null);

  // const [element1Shawdow, element2Shadow] = useMousePositionBackground([element1Ref, element2Ref]);
  const { background } = useMousePositionBackground(element1Ref);

  return (
    <div className="home" ref={element1Ref} style={{ background }}>
      <div className="home__overview home__section">
        <div className="home__overview-container">
          {/* <div
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
          </div> */}

          <div className="home__section home__features">FEATURES</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
