'use strict';
let gulp = require('gulp');
let webpack = require('gulp-webpack');
let rename = require('gulp-rename');
let del = require('del');
let sass = require('gulp-sass');

let jsPaths   = ['*.js', 'dev/**/*.js'];
let htmlPaths = ['dev/**/*.html', 'dev/*.html'];
let scssPaths = ['dev/style/*.scss'];
let cssPaths = ['dev/styles/*.css']
let mediaPaths = ['dev/img/*'];
let output = __dirname + '/public/';

gulp.task('del-public', () => {
  return del.sync([
    output + '*'
  ])
});

gulp.task('copy-html', () => {
  gulp.src(htmlPaths)
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest(output));
});

gulp.task('copy-media', () => {
  gulp.src(mediaPaths)
    .pipe(rename({dirname: '/media'}))
    .pipe(gulp.dest(output));
});

gulp.task('copy-json', () => {
  gulp.src('dev/vendor/particles.json')
  .pipe(gulp.dest(output));
})

gulp.task('copy-particles', () => {
  gulp.src('dev/vendor/particles.js')
  .pipe(gulp.dest(output));
})

gulp.task('webpack', () => {
  return gulp.src(__dirname + '/dev/entry.js')
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest(output));
});

gulp.task('sass', function() {
  return gulp.src(scssPaths)
  // .pipe(rename({dirname: '/css'}))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(output + 'css'));
});

gulp.task('copy-css', () => {
  gulp.src(cssPaths)
  .pipe(gulp.dest(output + 'css'));
})

// TODO: change watchers to delete pre-existing css/js/html from public
gulp.task('watch', () =>{
  gulp.watch(scssPaths, ['sass']);
  gulp.watch(jsPaths, ['webpack']);
  gulp.watch(htmlPaths, ['copy-html']);
  gulp.watch(mediaPaths, ['copy-media']);
  gulp.watch('dev/vendor/particles.json', ['copy-json']);
  gulp.watch('dev/vendor/particles.js', ['copy-particles']);
  gulp.watch('dev/styles/*.css', ['copy-css']);
});

gulp.task('default', ['del-public', 'webpack', 'copy-html',  'copy-media', 'copy-json', 'copy-particles', 'sass', 'copy-css', 'watch']);
