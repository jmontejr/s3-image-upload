import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { S3_BUCKET, MY_BUCKET, DESTINATION, REGION } from '../../services/s3';

import { setFiles } from "../../store/modules/files/actions";

import ProgressBar from './ProgressBar';
import { Wrapper, Container, Button, Label } from './style';
import imageFiles from '../../assets/images/files.svg';

const UploadToS3 = ({ draggable = true }) => {
  const dispatch = useDispatch();
  const { files } = useSelector((state) => state.files);
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const contentTypes = {
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'webp': 'image/webp',
    'svg': 'image/svg+xml'
  };

  const handleFileInput = (event) => {
    setProgress(0);
    setSelectedFile(event.target.files[0]);
  };

  const getByteSize = (number) => (number < 1024) && `${number} bytes`;

  const getKilobyteSize = (number) => {
    if(number >= 1024 && number < 1048576) {
      return `${(number / 1024).toFixed(1)} KB`;
    }
  };

  const getMegabyteSize = (number) => {
    if(number >= 1048576) {
      return `${(number / 1048576).toFixed(1)} MB`;
    }
  };

  const returnFileSize = (number) => {
    return getByteSize(number) ||
          getKilobyteSize(number) ||
          getMegabyteSize(number);
  };

  const getContentType = file => {
    const extension = file.split('.').pop();
    return contentTypes[extension];
  }

  const uploadFile = (file) => {
    if (!file) return null;

    setProgress(0);
    const pathName = `${ DESTINATION }/${ file.name }`;

    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: S3_BUCKET,
      Key: pathName,
      ContentType: getContentType(file.name)
    };

    MY_BUCKET
      .putObject(params)
      .on('httpUploadProgress', event => {
        setProgress(Math.round((event.loaded / event.total) * 100));
      })
      .send((err, data) => {
        if (err) {
          console.error(err);
          return `Error on try send file: ${ err.message }`;
        }

        dispatch(setFiles([
          ...files,
          {
            name: file.name,
            link: `https://${ S3_BUCKET }.s3.${ REGION }.amazonaws.com/${ pathName }`,
            size: returnFileSize(file.size),
            type: getContentType(file.name)
          }
        ]));

      });

    setSelectedFile(null);
  };

  return (
    <Wrapper>
      <Container>
        <Label htmlFor="uploader">
          <img src={imageFiles} alt="" />
          <span>Click or drop your files here</span>
          <input
            id="uploader"
            type="file"
            onChange={handleFileInput}
            accept="image/png, image/jpeg, image/svg+xml, image/webp"
            draggable
          />
          {!selectedFile ?
            <p>No files selected</p> :
            <p>{selectedFile && selectedFile?.name}</p>
          }
        </Label>
        <Button onClick={() => uploadFile(selectedFile)}>
          <span>Upload</span>
        </Button>
      </Container>
      <ProgressBar progress={progress} />
    </Wrapper>
  );
};

export default UploadToS3;
