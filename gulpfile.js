'use strict';

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var useref      = require('gulp-useref');
var gulpIf      = require('gulp-if');
var cssnano     = require('gulp-cssnano');
var imagemin    = require('gulp-imagemin');
var cache       = require('gulp-cache');
var del         = require('del');
var runSequence = require('run-sequence');
var uglify      = require('gulp-uglify');
var jshint      = require('gulp-jshint');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');

var src = 'assets/',
    paths = {
      scss: 'sass/**/*.scss',
      images: 'Resources/**/*.+(png|jpg|jpeg|gif|svg)',
      fonts: 'fonts/**/*',
      js: 'js/**/*.js'
    };

gulp.task('sass', function() {
  return gulp.src(src + paths.scss)
    .pipe(sass())
    .pipe(gulp.dest(src + 'css'));
});

//watch for scss files changes
gulp.task('watch', function() {
  gulp.watch(src + paths.scss, ['sass']);
  gulp.watch(src + paths.js, ['lint']);
});

//concatenates and minifies css files
gulp.task('useref', function() {
  return gulp.src('*.html')
    .pipe(useref())
  
    //Minifies only if it's a JS file
    .pipe(gulpIf('*.js', uglify()))
    
    //Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});

//Minifies images
gulp.task('images', function() {
  return gulp.src(src + paths.images)
  
    //Optimizing images is a slow process and it shouldn't be repeated each time
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('dist/Resources'));
});

//Copy fonts to dist
gulp.task('fonts', function() {
  return gulp.src(src + paths.fonts)
    .pipe(gulp.dest('dist/fonts'));
});

//clean dist
gulp.task('clean:dist', function() {
  return del.sync('dist');
});

//run sequence
gulp.task('build', ['framework'], function(callback) {
  runSequence('clean:dist', 
    ['sass', 'useref', 'images', 'fonts'],
    callback
  );
});

//default sequence tasks (only type "gulp")
gulp.task('default', function(callback) {
  runSequence(['sass', 'lint', 'watch'], callback);
});

gulp.task('lint', function() {
  return gulp.src(src + paths.js)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'));
});

gulp.task('framework', function() {
  return browserify({
    debug: false
  })
  .require('jquery')
  .bundle()
  .pipe(source('framework.js'))
  .pipe(gulp.dest('./assets/js/browserifying'));
});
