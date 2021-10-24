const path = require('path')

module.exports = {
  reactStrictMode: true,
  images:{
    domains:["links.papareact.com","instagram.fvga2-2.fna.fbcdn.net"]
  }
}

module.exports = {
/* Add Your Scss File Folder Path Here */
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/scss')],
  },
}