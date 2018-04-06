var gulp = require('gulp');
//var data = require('gulp-data');
var stylus = require('gulp-stylus');
var jade = require('gulp-jade');

// Get one .styl file and render
gulp.task('styl', function () {
  return gulp.src('./*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css/build/'));
});

// Options
// Options compress
gulp.task('compress', function () {
  return gulp.src('./css/compressed.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./css/build'));
});


// Set linenos
gulp.task('linenos', function () {
  return gulp.src('./css/linenos.styl')
    .pipe(stylus({linenos: true}))
    .pipe(gulp.dest('./css/build'));
});

// Include css
// Stylus has an awkward and perplexing 'include css' option
gulp.task('include-css', function() {
  return gulp.src('./css/*.styl')
    .pipe(stylus({
      'include css': true
    }))
    .pipe(gulp.dest('./'));

});

gulp.task('templates', function() {
  var YOUR_LOCALS = {};

  gulp.src('./app/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest(('./html/build/')))
})


gulp.task('default',['styl', 'templates']);
