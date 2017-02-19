'use strict';

var path = require('path'),
    gulp = require('gulp'),
    conf = require('./conf'),
    browserSync = require('browser-sync');

function isOnlyChange(event) {
  return event.type === 'changed';
}

gulp.task('watch', ['lint-styles', 'inject'], function () {
  gulp.watch([
    path.join(conf.paths.src, '/*.html'),
    'bower.json'
  ], ['inject-reload']);

  gulp.watch([
    path.join(conf.paths.src, '/app/**/*.css'),
    path.join(conf.paths.src, '/assets/sass/**/*.scss'),
    path.join(conf.paths.src, '/app/**/*.scss')
  ], function(event) {
    gulp.start('lint-styles');
    if(isOnlyChange(event)) {
      gulp.start('styles-reload');
    } else {
      gulp.start('inject-reload');
    }
  });

  gulp.watch([
    path.join(conf.paths.src, '/app/**/*.js')], function(event) {
    if(isOnlyChange(event)) {
      gulp.start('scripts-reload');
    } else {
      gulp.start('inject-reload');
    }
  });

  gulp.watch(path.join(conf.paths.src, '/app/**/*.html'), function(event) {
    browserSync.reload(event.path);
  });
});
