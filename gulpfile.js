'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var browserSyncLib = require('browser-sync');

var browserSync = browserSyncLib.create();

gulp.task('serve', [
	'html',
	'assets',
	'data',
	'views',
	'sass',
	'scripts',
	'browser-sync'
]);

gulp.task('html', function() {
	gulp.src(['./src/index.html'])
		.pipe(gulp.dest('./dist'));
});

gulp.task('assets', function() {
	gulp.src(['./src/assets/**/*.*'])
		.pipe(gulp.dest('./dist/assets'));
});

gulp.task('data', function() {
	gulp.src(['./src/data/**/*.*'])
		.pipe(gulp.dest('./dist/data'));
});

gulp.task('views', function() {
	gulp.src(['./src/views/**/*.*'])
		.pipe(gulp.dest('./dist/views'));
});

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