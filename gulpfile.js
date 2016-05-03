var gulp = require('gulp');
var webserver = require('gulp-webserver');
<<<<<<< 1b4ce248094b807c11928def809aab00ea341a0f
 
var server = {
  host: 'localhost', //192.168.1.195
  port: '8001'
}

gulp.task('webserver', function() {
  gulp.src('dist')
    .pipe(webserver({
      fallback: 'dist/index.html',
      host: server.host,
      port: server.port
    }));
=======

gulp.task('webserver', function() {
 gulp.src('dist')
   .pipe(webserver({
     fallback: 'dist/index.html'
   }));
>>>>>>> #90 deploy
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

'use strict';

var gulp = require('gulp');  
var gutil = require( 'gulp-util' );  
var ftp = require( 'vinyl-ftp' );

/** Configuration **/
var user = process.env.FTP_USER;  
var password = process.env.FTP_PWD;  
var host = 'traineedigitaldesk.pe.hu';  
var port = 21;  
var localFilesGlob = ['D:/Projetos/BemVindo/public_html/perfil/bruno-marques'];
var remoteFolder = '/';


// helper function to build an FTP connection based on our configuration
function getFtpConnection() {  
    return ftp.create({
        host: host,
        port: port,
        user: user,
        password: password,
        parallel: 1,
        log: gutil.log
    });
}

/**
 * Deploy task.
 * Copies the new files to the server
 *
 * Usage: `FTP_USER=someuser FTP_PWD=somepwd gulp ftp-deploy`
 */
gulp.task('ftp-deploy', function() {

    var conn = getFtpConnection();

    return gulp.src(localFilesGlob, { base: '.', buffer: false })
        .pipe( conn.newer( remoteFolder ) ) // only upload newer files 
        .pipe( conn.dest( remoteFolder ) )
    ;
});

/**
 * Watch deploy task.
 * Watches the local copy for changes and copies the new files to the server whenever an update is detected
 *
 * Usage: `FTP_USER=someuser FTP_PWD=somepwd gulp ftp-deploy-watch`
 */
gulp.task('ftp-deploy-watch', function() {

    var conn = getFtpConnection();

    gulp.watch(localFilesGlob)
    .on('change', function(event) {
      console.log('Changes detected! Uploading file "' + event.path + '", ' + event.type);

      return gulp.src( [event.path], { base: '.', buffer: false } )
        .pipe( conn.newer( remoteFolder ) ) // only upload newer files 
        .pipe( conn.dest( remoteFolder ) )
      ;
    });
});