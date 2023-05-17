import { useState } from 'react';
import fetch from '@/api/fetch';
import './index.scss';
import { AxiosResponse } from 'axios';
import api from './api';

function FileViewer() {
  const [qrcodeUrl, setQrcodeUrl] = useState('');

  return (
    <div id="file-viewer">
      FileViewer
      <div className="viewer-container">
        {qrcodeUrl && (
          <div className="qrcode-box">
            <img width={300} height={300} src={qrcodeUrl} alt="qrcode" />
          </div>
        )}
        {!qrcodeUrl && (
          <form
            method="post"
            action=""
            encType="multipart/form-data"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              console.log(formData.get('x-file'));
              fetch
                .post(api.uploadViewerFile(), formData)
                .then((result) => {
                  console.log(result.data);
                  if (result.data.code === 1) {
                    setQrcodeUrl(result.data.data.url);
                  }

                  return result;
                })
                .catch((err) => err);
            }}
          >
            <div>
              <input type="file" name="x-file" />
            </div>
            <div>
              <button type="submit">提交</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default FileViewer;
