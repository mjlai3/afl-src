'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var browserSyncLib = require('browser-sync');

var browserSync = browserSyncLib.create();

gulp.task('serve', [
	'sass',
	'scripts',
	'browser-sync'
]);

gulp.task('sass', function() {
	return gulp.src('./src/styles/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/styles'))
		.pipe(browserSync.stream());
});

gulp.task('scripts', () => {
	return gulp.src('./src/scripts/**/*.js')
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/scripts'));
});

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: './dist'
		}
	});
});