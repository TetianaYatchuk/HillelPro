const { src, dest } = require('gulp');

const path = require('../config/path.js');
const app = require('../config/app.js');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const concat = require('gulp-concat');
const cssImport = require('gulp-cssimport');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const shorthand = require('gulp-shorthand');
const groupCssMediaQueries = require('gulp-group-css-media-queries');

const css = () => {
  const plugins = [
    autoprefixer()
  ];

  return src(path.css.src, { sourcemaps: app.isDev})
    .pipe(plumber({
      errorHandler: notify.onError()
    }))
    .pipe(concat('main.css'))
    .pipe(cssImport())
    .pipe(postcss(plugins))
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(dest(path.css.dest, { sourcemaps: app.isDev}))
    .pipe(rename({ suffix: '.min'}))
    .pipe(csso())
    .pipe(dest(path.css.dest, { sourcemaps: app.isDev}))
}

module.exports = css;