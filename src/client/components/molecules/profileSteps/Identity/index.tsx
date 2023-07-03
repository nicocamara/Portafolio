import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { useContext, useEffect, useState } from 'react';
import { Portfolio } from '../../../../utils/Type';
import { storageFile } from '../../../../utils/firebaseApp';
import getAssetUrl from '../../../../utils/getAssetUrl';
import StateContext from '../../../../utils/stateContext';
import Button from '../../../atoms/button';
import Icons from '../../../atoms/icons';
import './style.scss';

type identityProps = {
  date: Portfolio;
};

const Identity = ({ date }: identityProps) => {
  const { user } = useContext(StateContext);
  const [avatarImg, setAvatarImg] = useState('');

  useEffect(() => {
    (async () => {
      const storageRef = ref(storageFile, `/images/${user?.userName}/avatar/`);
      const avatarRef = await listAll(storageRef);
      avatarRef.items.forEach(async fileRef => {
        const downloadUrl = await getDownloadURL(fileRef);
        setAvatarImg(downloadUrl);
      });
    })();
  }, []);

  return (
    <div className="identity">
      {date.headLine.map((head, index) => (
        <div className="identity__container" key={index}>
          <img
            className="identity__foto"
            src={avatarImg ? avatarImg : getAssetUrl('placeholder.png')}
            alt="userimage"
          />
          <div className="identity__logos">
            <Icons path="linkedin" alt="linkedin" className="linkedin" link={head.linkedin} />
            <Icons path="facebook" alt="facebook" className="linkedin" link={head.facebook} />
            <Icons path="github" alt="github" className="linkedin" link={head.github} />
            <Icons path="instagram" alt="instagram" className="linkedin" link={head.instagram} />
          </div>
        </div>
      ))}
      <div className="identity__buttons">
        <Button className="identity__button">Download CV</Button>
      </div>
    </div>
  );
};

export default Identity;
