const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://mockapi.io/projects/65d0f96fab7beba3d5e3f426',
      changeOrigin: true,
    })
  );
};