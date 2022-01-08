const path = require('path')
module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/view/components/'),
      '@redux': path.resolve(__dirname, 'src/store/'),
      '@svg': path.resolve(__dirname, 'src/assets/svg/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
    },
  },
}
