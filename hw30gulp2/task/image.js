const { src, dest } = require('gulp');

const path = require('../config/path.js');
const app = require('../config/app.js');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const newer = require('gulp-newer');
const gulpif = require('gulp-if');

async function image() {
  const { default: imageMin } = await import('gulp-imagemin');
  const { default: imageminMozjpeg } = await import('imagemin-mozjpeg');
  const { default: imageminPngquant } = await import('imagemin-pngquant');

  return src(path.image.src)
    .pipe(plumber({
      errorHandler: notify.onError()
    }))
    .pipe(newer(path.image.dest))
    .pipe(gulpif(app.isProd, imageMin([
      imageminMozjpeg(app.imageminMozjpeg),
      imageminPngquant(app.imageminPngquant)
    ])))
    .pipe(dest(path.image.dest));
}

module.exports = image;