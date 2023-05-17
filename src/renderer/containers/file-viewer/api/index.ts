import { getUrl } from 'renderer/api/api';

const prefix = '/upload';

const upload = (path: string) => getUrl(prefix) + path;

export default {
  uploadViewerFile: () => upload('/upload_viewer_file'),
};
