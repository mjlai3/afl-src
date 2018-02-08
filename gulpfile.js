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
	'browser-sync',
	'watch'
]);

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: './dist'
		}
	});
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

	// Generate minified
	// browserify({
	// 	entries: './lib/_scripts/main.js',
	// 	debug: true
	// })
	// .transform("babelify", { presets: ["es2015"] })
	// .bundle()
	// .pipe(source('main.min.js')) // **
	// .pipe(buffer())
	// .pipe(uglify())
	// .pipe(gulp.dest('./dist/scripts'));

	// ** bundle() directly to gulp.dest won’t work when you need to pipe with other gulp plugins like uglify or gulp.dist. This is because browserify.bundle() return a text stream where as gulp works using vinyl stream. In order to browserify to work with other plugins you need to use vinyl-source-stream. (http://blog.revathskumar.com/2016/02/browserify-with-gulp.html)
});

gulp.task('watch', function () {
    gulp.watch(['./src/styles/*.scss'],['sass']);

	// Watch dist for BrowserSync
	// gulp.watch([
	// 	'./dist/*.html',
	// 	'./dist/scripts/*.js'
	// ]).on('change', browserSync.reload);
});