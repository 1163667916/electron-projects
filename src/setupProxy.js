// const { createProxyMiddleware } = require('http-proxy-middleware');
import { createProxyMiddleware } from 'http-proxy-middleware';

export default (app) => {
  app.use(
    createProxyMiddleware('/api/lol/', {
      target: 'http://127.0.0.1:7777/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
