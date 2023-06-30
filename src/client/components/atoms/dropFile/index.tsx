import { useEffect, useMemo, useState } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import './style.scss';
import { Asset } from '../../../utils/Type';
import classNames from 'classnames';

type DropFileProps = {
  oldAssets: Asset[];
  scenario: string;
  onDropHandler: (files: Asset[]) => void;
  showPreview?: boolean;
  isSingleAsset?: boolean;
};

const DropFile = (props: DropFileProps) => {
  const { oldAssets, scenario, onDropHandler, isSingleAsset, showPreview } = props;
  const [files, setFiles] = useState<Asset[]>(oldAssets);

  const revoqueDataUris = (fileURL: string) => URL.revokeObjectURL(fileURL);

  const dropHandler = (acceptedFiles: T[]) => {
    const fileToUpload = acceptedFiles.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        fileType: scenario,
      })
    );

    setFiles(fileToUpload);
    onDropHandler(fileToUpload);
  };

  useEffect(
    () => () => {
      files.forEach(file => revoqueDataUris(file.preview));
    },
    []
  );

  const dropzoneOptions: DropzoneOptions = {
    multiple: !isSingleAsset,
    accept: ['avatar', 'project'].includes(scenario)
      ? { 'image/*': ['.jpg', '.jpeg', '.png'] }
      : { 'text/html': ['.pdf'] },
    onDrop: dropHandler,
  };

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone(dropzoneOptions);

  const defaultLeyend = 'Drag and drop some files here, or click to select files';
  const errorLeyend = "That won't work";

  return (
    <section className="dropfile">
      <div
        className={classNames('dropfile__area', {
          'dropfile__area--focus': isFocused,
          'dropfile__area--error': isDragReject,
          'dropfile__area--sucess': isDragAccept,
        })}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <p className="dropfile__leyend">{isDragReject ? errorLeyend : defaultLeyend}</p>
      </div>
      {showPreview && (
        <aside className="dropfile__preview">
          {files.map(file => (
            <div className="dropfile__thumb" key={file.name}>
              <div style={{ display: 'flex', minWidth: 0, overflow: 'hidden' }}>
                <img
                  src={file.preview}
                  style={{ display: 'block', width: 'auto', height: '100px' }}
                  onLoad={() => revoqueDataUris(file.preview)}
                />
              </div>
            </div>
          ))}
        </aside>
      )}
    </section>
  );
};

export default DropFile;
