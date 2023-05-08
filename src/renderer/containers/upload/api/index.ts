import { getUrl } from 'renderer/api/api';

const prefix = '/upload';

const upload = (path: string) => getUrl(prefix) + path;

export default {
  uploadVideoData: () => upload('/upload_video'),
};
