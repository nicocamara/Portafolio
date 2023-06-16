import { useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './style.scss';
import { Asset } from '../../../utils/Type';

// https://react-dropzone.js.org/#section-components

const baseStyle = {
  flex: 1,
  display: 'flex',
  //   flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
};

const focusedStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
};

type DropFileProps = {
  oldAssets: Asset[];
  scenario: string;
  onDropHandler: (files: Asset[]) => void;
  isSingleAsset?: boolean;
};

const DropFile = (props: DropFileProps) => {
  const { oldAssets, scenario, onDropHandler, isSingleAsset } = props;
  const [files, setFiles] = useState<Asset[]>(oldAssets);

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    multiple: !isSingleAsset,
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png'],
      //   'text/html': ['.pdf'],
    },
    onDrop: acceptedFiles => {
      const fileToUpload = acceptedFiles.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          fileType: scenario,
        })
      );

      setFiles(fileToUpload);
      onDropHandler(fileToUpload);
    },
  });
  console.log(files);

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  useEffect(
    () =>
      // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
      () =>
        files.forEach(file => URL.revokeObjectURL(file.preview)),
    []
  );

  return (
    <section className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag and drop some files here, or click to select files</p>
      </div>
      <aside className="dropfile__preview">
        {files.map(file => (
          <div className="dropfile__thumb" key={file.name}>
            <div style={thumbInner}>
              <img
                src={file.preview}
                style={img}
                // Revoke data uri after image is loaded
                onLoad={() => {
                  URL.revokeObjectURL(file.preview);
                }}
              />
            </div>
          </div>
        ))}
      </aside>
    </section>
  );
};

export default DropFile;
