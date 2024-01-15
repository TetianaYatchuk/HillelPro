const isProd = process.argv.includes('--production');
const isDev = !isProd;

module.exports = {
  isProd: isProd,
  isDev: isDev,

  htmlmin: {
    collapseWhitespace: isProd
  },

  pug: {
    pretty: isDev,
    data: {
      news: require('../data/news.json')
    }
  },

  webpack: {
    mode: isProd ? 'production' : 'development'
  },  

  imageminMozjpeg: {
    quality: 75, progressive: true
  },

  imageminPngquant: { 
    speed: 1, quality: [0.8, 0.9] 
  },

  fonter: {
    formats: ['ttf', 'woff', 'eot', 'svg']
  }
}