var gulp = require('gulp');
//var data = require('gulp-data');
var stylus = require('gulp-stylus');

// Get one .styl file and render
gulp.task('one', function () {
  return gulp.src('./css/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css/build'));
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

gulp.task('default',['one', 'compress', 'linenos']);
