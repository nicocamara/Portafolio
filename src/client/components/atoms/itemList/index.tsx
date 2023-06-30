import { Portfolio } from '../../../utils/Type';
import getAssetUrl from '../../../utils/getAssetUrl';
import Button from '../button';
import './style.scss';

type ItemListProps = {
  item: Portfolio;
};

const ItemList = ({ item }: ItemListProps) => {
  console.log('si', item);
  return (
    <div className="itemList">
      {item.overview.avatarURL ? (
        <img className="itemList__image " src={item.overview.avatarURL} />
      ) : (
        <img className="itemList__image " src={getAssetUrl('placeholder.png')} />
      )}
      <div className="itemList__dataContainer">
        <div className="itemList__title">{item.overview.firstName + ' ' + item.overview.lastName}</div>

        <div>{item.overview.country}</div>
      </div>
      <Button>view cv</Button>
    </div>
  );
};

export default ItemList;
