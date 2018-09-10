'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('sass', function() {
	return gulp.src('docs/src/styles/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('index.css'))
		.pipe(gulp.dest('docs/bundle'));
});

gulp.task('sass:watch', function () {
	gulp.watch('docs/src/styles/*.scss', ['sass']);
});

gulp.task('babel', () =>
	gulp.src('docs/src/scripts/*.js')
		.pipe(babel({
			presets: [
				'@babel/preset-env'
			]
		}))
		.pipe(concat('index.js'))
		.pipe(uglify())
		.pipe(gulp.dest('docs/bundle'))
);

gulp.task('babel:watch', function () {
	gulp.watch('docs/src/scripts/*.js', ['babel']);
});

gulp.task('default', ['sass', 'babel']);
gulp.task('watch', ['sass:watch', 'babel:watch']);
