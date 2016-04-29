var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src('dist')
    .pipe(webserver({
      fallback: 'dist/index.html'
    }));
});

gulp.task('minify-html', function () {
    gulp.src('app/*.html') // path to your files
    .pipe(minifyHtml())
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', function () {
  //gulp.start('minify-html');
  gulp.start('webserver');
});