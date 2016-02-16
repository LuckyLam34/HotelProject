'use strict';

var gulp      = require('gulp');
var sass      = require('gulp-sass');
var useref    = require('gulp-useref');
var gulpIf    = require('gulp-if');
var cssnano   = require('gulp-cssnano');
var imagemin  = require('gulp-imagemin');
var cache     = require('gulp-cache');

var src = 'app/',
    paths = {
      scss: 'scss/**/*.scss',
      images: 'Resources/**/*.+(png|jpg|jpeg|gif|svg)'
    };

gulp.task('sass', function() {
  return gulp.src(src + paths.scss)
    .pipe(sass())
    .pipe(gulp.dest(src + 'css'));
});

//watch for scss files changes
gulp.task('watch', function() {
  gulp.watch(src + paths.scss, ['sass']);
});

//concatenates and minifies css files
gulp.task('useref', function() {
  return gulp.src(src + '*.html')
    .pipe(useref())
  
    //Minifies only if it's a JS file
    //    .pipe(gulpIf('*.js', uglify()))
    
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

