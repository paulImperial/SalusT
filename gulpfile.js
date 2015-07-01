var gulp = require('gulp'),
    connect = require('gulp-connect'),
    uncss = require('gulp-uncss'),
    mini = require('gulp-minify-css');

gulp.task('connect', function () {
    connect.server({
        root: '',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('*.html')
        .pipe(connect.reload());
});

gulp.task('css', function () {
    gulp.src('*.css')
        .pipe(connect.reload());
});

gulp.task('js', function () {
    gulp.src('*.js')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['*.html', '*.css', '*js'], ['html', 'css', 'js']);
});

gulp.task('uncss', function(){
    
    return gulp.src('*.css')
        .pipe(uncss({
            html:['index.html']
    }))
        .pipe(gulp.dest('./out'));
    
});

gulp.task('mini', function(){
    
    return gulp.src('out/*.css')
        .pipe(mini())
        .pipe(gulp.dest('dist'));
    
});

gulp.task('default', ['uncss', 'mini','connect', 'watch']);