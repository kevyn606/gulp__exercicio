const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');


function comprimejs(){
    return gulp.src('./source/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'));

}

function styles(){
    return gulp.src('./source/*.scss')
        .pipe(sass({ outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

function images(){
    return gulp.src('./img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images);

exports.watch = function() {
    gulp.watch('./source/*.scss', gulp.parallel(styles))
    
}

exports.javascript = comprimejs;