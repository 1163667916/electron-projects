import { Tabs } from 'antd';

import UploadVideo from '../video';
import LargeFileUpload from '../large-file-upload';

function UploadPage() {
  const items = [
    { label: '上传视频', key: 'item-1', children: <UploadVideo /> }, // 务必填写 key
    { label: '大文件上传', key: 'item-2', children: <LargeFileUpload /> },
  ];
  return (
    <div>
      <div>
        <Tabs items={items} />
      </div>
    </div>
  );
}

export default UploadPage;
