var gulp = require( 'gulp' );
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );
 
gulp.task( 'deploy', function () {
 
    var conn = ftp.create( {
        host:     'causeforce.com',
        user:     'mquraishi@causeforce.com',
        password: 'C(cR==Hs.^If',
        parallel: 10,
        log:      gutil.log
    } );
 
    var globs = [
        'dist/**',
        'dist/assets/'
    ];
 
    // using base = '.' will transfer everything to /public_html correctly 
    // turn off buffering in gulp.src for best performance 
 
    return gulp.src( globs, { base: './dist/', buffer: false } )
        .pipe( conn.newer( '/subdomains/koi' ) ) // only upload newer files 
        .pipe( conn.dest( '/subdomains/koi' ) );
 
} );