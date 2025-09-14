const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/dev/upload',
    createProxyMiddleware({
      target: 'https://geub7uzlzh.execute-api.ap-southeast-2.amazonaws.com/dev/upload',
      changeOrigin: true,
    })
  );
};