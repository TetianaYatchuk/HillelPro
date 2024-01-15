const { src, dest } = require('gulp');

const path = require('./config/path.js');
const app = require('./config/app.js');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const fileInclude = require('gulp-file-include');
const htmlMin =  require('gulp-htmlmin');

async function getSize() {
  const size = await import('gulp-size');
  return size;
}

async function html() {
  const size = await import('gulp-size');

  return src(path.html.src)
    .pipe(plumber({
      errorHandler: notify.onError()
    }))
    .pipe(fileInclude())
    .pipe(size.default({ title: 'before compression' }))
    .pipe(htmlMin(app.htmlmin))
    .pipe(size.default({ title: 'after compression' }))
    .pipe(dest(path.html.dest))
}

module.exports = html();