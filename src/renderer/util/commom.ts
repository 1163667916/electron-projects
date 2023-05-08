import sparkMD5 from 'spark-md5';

type FileType = 'image' | 'video' | 'audio' | 'txt';

const getExtByFileType = (type: FileType) => {
  if (type === 'image') {
    return ['png', 'jpg', 'jpeg', 'webp', 'gif'];
  }
  if (type === 'video') {
    return ['mp4', 'mkv'];
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

// 单个切片大小
const chunkSize = 10 * 1024 * 1024;

/**
 * file: 文件上传时，通过e.target.files[0]拿到的值
 */
const createFileChunk = (file: File) => {
  let current = 0;
  // 保存与返回所有切片的参数
  const chunks: Array<Blob> = [];
  while (current < file.size) {
    // 文件进行切片
    const chunk = file.slice(current, current + chunkSize);
    chunks.push(chunk);
    current += chunkSize;
  }
  return chunks;
};

/**
 * 计算md5值
 */
const calculationChunksMd5 = (chunks: Array<Blob>) => {
  return new Promise((resolve) => {
    // 创建FileReader对文件进行读取
    const reader = new FileReader();
    // 创建sparkMd5的ArrayBuffer对象，进行增量计算md5值
    const spark = new sparkMD5.ArrayBuffer();
    let readIndex = 0;

    function loadNext() {
      // 递归调用结束条件，当没有chunk可以读取的时候
      if (chunks[readIndex]) {
        return reader.readAsArrayBuffer(chunks[readIndex]);
      }
      // 最终的md5值
      resolve(spark.end());
      return null;
    }

    reader.onload = (ev: ProgressEvent<FileReader>) => {
      readIndex += 1;
      // 获取读取到的内容，这里可以计算一下进度
      const result = ev.target?.result as ArrayBuffer;
      // 将内容添加到spark中，进行计算
      spark.append(result);
      // 继续下一个文件读取
      loadNext();
    };
    // 启动计算
    loadNext();
  });
};

export { checkfileExt, createFileChunk };
