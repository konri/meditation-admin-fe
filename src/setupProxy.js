// uncomment if we have some proxy issue.

// const {createProxyMiddleware} = require('http-proxy-middleware');
//
// module.exports = function (app) {
//     if (process.env.REACT_APP_API_ENDPOINT) {
//         app.use(
//             '/quietly',
//             createProxyMiddleware({
//                 target: process.env.REACT_APP_API_ENDPOINT,
//                 changeOrigin: true,
//             })
//         );
//     }
// };
