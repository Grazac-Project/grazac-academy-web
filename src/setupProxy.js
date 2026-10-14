const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware({
      pathFilter: (pathname) => pathname === '/api' || pathname.startsWith('/api/'),
      target: process.env.API_PROXY_TARGET,
      changeOrigin: true,
    })
  );
};
