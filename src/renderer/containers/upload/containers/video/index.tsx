import { useEffect, useState } from 'react';
// import { Form as RouterForm } from 'react-router-dom';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form as AntForm, Input, message, Upload } from 'antd';
import axios from 'axios';
import { Rule } from 'antd/es/form';
import api from '../../api';
import util from '@/util';
import UploadVideoStyleComponent from '@/components/upload/video';

type UploadVideoFormRule = Record<'title' | 'cover' | 'video', Rule[]>;

const uploadVideoTip = {
  cover: '请上传封面图片（.png|.jpg|.jpeg|.webp|.gif）',
  video: '请上传视频（.mp4）',
};

function UploadVideo() {
  const [loading, setLoading] = useState(false);

  const [uploadVideoForm] = AntForm.useForm();

  useEffect(() => {
    setLoading(false);

    return () => {};
  }, []);

  useEffect(() => {
    if (uploadVideoForm) {
      uploadVideoForm.setFieldsValue({
        title: '',
        cover: [],
        video: [],
      });
    }
  }, [uploadVideoForm]);

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>点击上传</div>
    </div>
  );

  const formRules: UploadVideoFormRule = {
    title: [
      {
        required: true,
        type: 'string',
        max: 100,
        message: '请输入标题，标题长度不能超过100',
        whitespace: true,
      },
    ],
    cover: [
      {
        required: true,
        message: uploadVideoTip.cover,
      },
    ],
    video: [{ required: true, message: uploadVideoTip.video }],
  };

  const handleUploadVideo = () => {
    uploadVideoForm
      .validateFields()
      .then((form) => {
        console.log(form);

        const formData = new FormData();
        formData.append('title', form.title);
        formData.append('cover', form.cover[0].originFileObj);
        formData.append('x-video', form.video[0].originFileObj);
        // axios.post(api.uploadVideoData(), formData);
        return form;
      })
      .catch(() => {});
  };

  const normFile = (e: any) => {
    // console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div>
      <AntForm
        autoComplete="off"
        form={uploadVideoForm}
        onFinish={() => handleUploadVideo()}
      >
        <AntForm.Item name="title" label="标题" rules={formRules.title}>
          <Input />
        </AntForm.Item>
        <AntForm.Item
          label="封面"
          name="cover"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={formRules.cover}
        >
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList
            action=""
            beforeUpload={(file) => {
              console.log(file);
              if (util.checkfileExt(file.name, 'image')) {
                uploadVideoForm.setFieldValue('cover', [file]);
                return false;
              }
              message.warning(uploadVideoTip.cover);
              return false;
            }}
            customRequest={() => {}}
            fileList={uploadVideoForm.getFieldValue('cover')}
          >
            {uploadButton}
          </Upload>
        </AntForm.Item>
        <AntForm.Item
          label="视频"
          name="video"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={formRules.video}
        >
          <Upload
            showUploadList
            beforeUpload={(file) => {
              if (util.checkfileExt(file.name, 'video')) {
                uploadVideoForm.setFieldValue('video', [file]);
                return false;
              }
              message.warning(uploadVideoTip.video);
              return false;
            }}
            customRequest={() => {}}
            fileList={uploadVideoForm.getFieldValue('video')}
          >
            <UploadVideoStyleComponent />
          </Upload>
        </AntForm.Item>
        <AntForm.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </AntForm.Item>
      </AntForm>
    </div>
  );
}

export default UploadVideo;
