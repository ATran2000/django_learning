const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(App) {
  App.use(
    '/api',  // Specify the endpoint you want to proxy (adjust as needed)
    createProxyMiddleware({
      target: 'http://127.0.0.1:8000',  // Specify the URL of your Django backend
      changeOrigin: true,
    })
  );
};