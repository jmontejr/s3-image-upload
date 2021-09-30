import React, { useState } from 'react';
import { S3_BUCKET, MY_BUCKET, DESTINATION } from '../../services/s3';

import ProgressBar from './ProgressBar';
import { Container, Button } from './style';

const UploadToS3 = () => {
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = event => {
    setProgress(0);
    setSelectedFile(event.target.files[0]);
  };

  const uploadFile = file => {

    const destination = DESTINATION;
    const pathName = `${ destination }/${ file.name }`;

    const contentTypes = {
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'png': 'image/png',
      'webp': 'image/webp',
      'svg': 'image/svg+xml'
    };

    const getContentType = file => {
      const extension = file.split('.').pop();
      return contentTypes[extension];
    }

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
      .send(err => {
        if (err) console.log(err);
      });
  };

  return (
    <div>
      <Container>
        <input
          type="file"
          onChange={handleFileInput}
          accept="image/png, image/jpeg, image/svg+xml, image/webp"
          />
        <Button onClick={() => uploadFile(selectedFile)}>
          <span>Upload</span>
        </Button>
      </Container>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default UploadToS3;
