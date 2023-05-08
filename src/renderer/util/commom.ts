type FileType = 'image' | 'video' | 'audio' | 'txt';

const getExtByFileType = (type: FileType) => {
  if (type === 'image') {
    return ['png', 'jpg', 'jpeg', 'webp', 'gif'];
  }
  if (type === 'video') {
    return ['mp4'];
  }
  if (type === 'audio') {
    return [];
  }
  if (type === 'txt') {
    return ['txt'];
  }

  throw new Error('type not validate');
};

const checkfileExt = (filename: string, fileType: FileType) => {
  let ext = '';
  if (filename.lastIndexOf('.') !== -1) {
    const idx = filename.lastIndexOf('.') + 1;
    ext = filename.slice(idx);
  }

  if (ext) {
    return getExtByFileType(fileType).includes(ext);
  }

  return false;
};

export { checkfileExt };
