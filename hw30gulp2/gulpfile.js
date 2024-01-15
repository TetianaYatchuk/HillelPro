const { watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

const path = require('./config/path.js');
const app = require('./config/app.js');

const clear = require('./task/clear.js');
const pug = require('./task/pug.js');
const scss = require('./task/scss.js');
const js = require('./task/js.js');
const image = require('./task/image.js');
const font = require('./task/font.js');

const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  });
}

const watcher = () => {
  watch(path.pug.watch, pug).on('all', browserSync.reload);
  watch(path.scss.watch, scss).on('all', browserSync.reload);
  watch(path.js.watch, js).on('all', browserSync.reload);
  watch(path.image.watch, image).on('all', browserSync.reload);
  watch(path.font.watch, font).on('all', browserSync.reload);
}

const build = series(
  clear,
  parallel(pug, scss, js, image, font)
);

const dev = series(
  build,
  parallel(watcher, server)
);

exports.pug = pug;
exports.scss = scss;
exports.js = js;
exports.image = image;
exports.font = font;

exports.default = app.isProd
  ? build
  : dev;