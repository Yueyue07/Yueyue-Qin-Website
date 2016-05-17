const gulp = require('gulp');
const webpack = require('webpack-stream');
const babel = require('babel-loader');
const html = require('html-loader');
const sass = require('gulp-sass');
const maps = require('gulp-sourcemaps');

gulp.task('html:dev', () => {
  gulp.src(__dirname + '/app/**/*.html')
    .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('sass:dev', () => {
  gulp.src(__dirname + '/app/**/*.scss')
    .pipe(maps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(__dirname + '/build'));
});


gulp.task('venderjs:dev', () => {
  gulp.src(__dirname + '/app/js/vender/*.js')
    .pipe(gulp.dest(__dirname + '/build/vender'));
});

gulp.task('webpack:dev', () => {
  gulp.src(__dirname + '/app/js/client.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
      .pipe(gulp.dest('build/'));
});

gulp.task('jquery:dev', () => {
  gulp.src(__dirname + '/app/js/animation.js')
      .pipe(gulp.dest('build/'));
});

gulp.task('build:dev', ['html:dev', 'sass:dev',
  'venderjs:dev', 'webpack:dev', 'jquery:dev']);
