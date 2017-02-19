'use strict';

var gulp = require('gulp'),
    cache = require('gulp-cached'),
    sassLint = require('gulp-sass-lint');

gulp.task('lint-styles', function() {
  return lintStyles();
});

var lintStyles = function() {
  return gulp.src('src/**/*.scss')
    .pipe(cache('lint-styles'))
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
};
