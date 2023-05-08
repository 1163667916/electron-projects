import { Tabs } from 'antd';

import UploadVideo from '../video';

function UploadPage() {
  const items = [
    { label: '上传视频', key: 'item-1', children: <UploadVideo /> }, // 务必填写 key
    { label: '项目 2', key: 'item-2', children: '内容 2' },
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
