const { src, dest } = require('gulp');

const path = require('../config/path.js');
const app = require('../config/app.js');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const shorthand = require('gulp-shorthand');
const groupCssMediaQueries = require('gulp-group-css-media-queries');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');

const scss = () => {
  const plugins = [
    autoprefixer()
  ];

  return src(path.scss.src, { sourcemaps: app.isDev})
    .pipe(plumber({
      errorHandler: notify.onError()
    }))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(dest(path.scss.dest, { sourcemaps: app.isDev}))
    .pipe(rename({ suffix: '.min'}))
    .pipe(csso())
    .pipe(dest(path.scss.dest, { sourcemaps: app.isDev}))
}

module.exports = scss;