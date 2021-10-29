const path = require('path')

module.exports = {
  reactStrictMode: true,
  images:{
    domains:["instagram.com"]
  }
}

module.exports = {
/* Add Your Scss File Folder Path Here */
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/scss')],
  },
}