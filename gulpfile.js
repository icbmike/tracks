var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	less = require('gulp-less'),
	rename = require('gulp-rename');


gulp.task('js', function(){
	gulp.src('src/js/index.js')
	.pipe(browserify())
	.pipe(rename('bundle.js'))
	.pipe(gulp.dest('./build/'));
});

gulp.task('less', function(){
	gulp.src('src/styles/index.less')
	.pipe(less()).
	pipe(rename('styles.css'))
	.pipe(gulp.dest('./build/'));
});

gulp.task('build', ['js', 'less']);