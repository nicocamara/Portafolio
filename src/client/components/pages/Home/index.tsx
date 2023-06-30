import SecondSection from '../../molecules/homeSections/second';
import Slider from '../../molecules/homeSections/first';
import './style.scss';

const Home = () => (
  <div className="home">
    <div className="home__overview home__section">
      <div className="home__overview-container">
        <div className="home__overview-text">Your professional portfolio whenever you need it</div>
        <div className="home__section home__features">
          <SecondSection />
        </div>
        <div className="home__section home__features">
          <Slider />
        </div>
            <div className="home__section home__features">soon</div>
      </div>
    </div>
  </div>
);

export default Home;
