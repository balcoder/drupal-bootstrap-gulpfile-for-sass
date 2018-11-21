var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('sass', function () {
 // gulp.src locates the source files for the process.
 // This globbing function tells gulp to use all files
 // ending with .scss or .sass within the scss folder.
 gulp.src('./scss/style.scss')
 // Converts Sass into CSS with Gulp Sass
 // Outputs CSS files in the css folder
 .pipe(sourcemaps.init())
 .pipe(sass({errLogToConsole: true}))
// pass the converted css to 
 .pipe(postcss([autoprefixer({ grid: true, browsers: ['>1%'] })]))
 .pipe(sourcemaps.write())
 .pipe(gulp.dest('./css'));
});

//gulp.task('autoprefixer', function() {
//  return gulp.src('./css/*.css')
//    .pipe(sourcermaps.init())
//    .pipe(postcss([autoprefixer({ grid: true, browsers: ['>1%'] })]))
//    .pipe(sourcermaps.write('.'))
//    .pipe(gulp.dest('dist/css'))
//});

gulp.task('watch', function() {
 // Watches the scss folder for changes in all .scss and .sass files
 // If any file changes, run the sass task
 gulp.watch('./scss/**/*.{scss,sass}', ['sass'])
});

