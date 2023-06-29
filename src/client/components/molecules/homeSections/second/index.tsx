import { useContext, useEffect, useState } from 'react';
import ItemList from '../../../atoms/itemList';
import './style.scss';
import StateContext from '../../../../utils/stateContext';
import { Portfolio } from '../../../../utils/Type';

const SecondSection = () => {
  const { handlers } = useContext(StateContext);
  const [portfolioItems, setPortfolioItems] = useState<Portfolio[]>([]);

  useEffect(() => {
    (async () => {
      const response = await handlers.getAllPortfolios();
      console.log('lola', response);

      setPortfolioItems(response);
    })();
  }, []);

  return (
    <div className="secondSection">
      <div className="secondSection__title">Check out some users who use our service</div>
      <hr className="secondSection__line" />

      <div className="secondSection__items">
        {portfolioItems.map((item, index) => (
          <ItemList key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SecondSection;
