import classNames from 'classnames';
import { Field } from 'formik';
import { Asset } from '../../../../utils/Type';
import { runValidation } from '../../../../utils/validations';
import Button from '../../../atoms/button';
import DropFile from '../../../atoms/dropFile';
import { Route } from '../../../pages/editPage';
import TextField from '../../formik/TextField';
import './styles.scss';
import getAssetUrl from '../../../../utils/getAssetUrl';

type OverViewProps = {
  oldAssets: Asset[];
  changeRoute: (newRoute: Route) => void;
  handleAsset: (asset: Asset) => void;
};

const OverView = ({ oldAssets, changeRoute, handleAsset }: OverViewProps) => {
  const handleAssetUpload = (files: Asset[]) => {
    if (!files.length) {
      return;
    }
    handleAsset(files[0]);
  };

  const avatarURL = oldAssets.find(a => a.fileType === 'avatar')?.preview ?? getAssetUrl('avatar-placeholder.jpg');

  return (
    <div className="overview">
      <div className="overview__title">Personal Data</div>
      <hr className="overview__line" />
      <div className="overview__avatar">
        <div className="overview__avatar-container">
          <div className="overview__avatar-preview" style={{ backgroundImage: `url(${avatarURL})` }}></div>
        </div>
        <DropFile isSingleAsset scenario="avatar" onDropHandler={handleAssetUpload} oldAssets={oldAssets} />
      </div>
      <div className="form">
        <div className="form__field-container">
          <Field
            component={TextField}
            name="overview.firstName"
            label={'First Name'}
            validate={(value: string) => runValidation(value, 'firstName')}
          />
        </div>
        <div className="form__field-container">
          <Field
            component={TextField}
            name="overview.lastName"
            label={'last Name'}
            validate={(value: string) => runValidation(value, 'lastName')}
          />
        </div>
        <div className="form__field-container">
          <Field
            component={TextField}
            name="overview.email"
            label="Email"
            type="email"
            validate={(value: string) => runValidation(value, 'email')}
          />
        </div>
        <div className="form__field-container">
          <Field
            component={TextField}
            name="overview.country"
            label={'Country'}
            validate={(value: string) => runValidation(value, 'country')}
          />
        </div>
        <div className="form__field-container">
          <Field component={TextField} name="overview.phone" label={'Phone number'} />
        </div>
        <div className="form__field-container">
          <Field
            component={TextField}
            name="overview.city"
            label={'City'}
            validate={(value: string) => runValidation(value, 'city')}
          />
        </div>
        <div className="form__field-container">
          <Field
            component={TextField}
            name="overview.street"
            label={'Street'}
            validate={(value: string) => runValidation(value, 'street')}
          />
        </div>
        <div className={classNames('form__field-container', 'overview__date')}>
          <div className="overview__date-subtitles">
            Birthdate
            <Field className="overview__date-button" type="date" name="overview.birthDate" />
          </div>
        </div>
      </div>
      <div className="form__field-container">
        <Button className="overview__button" onClick={() => changeRoute('headLine')}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default OverView;
