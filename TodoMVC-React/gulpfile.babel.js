/**
 * Created by 78462 on 2017/4/23.
 */
import gulp from 'gulp';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import connect from 'gulp-connect';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import streamify from 'gulp-streamify';

let refresh = () => {
    gulp.src('*.html')
        .pipe(connect.reload());
};

gulp.task('connect', () => {
    connect.server({
        port: 1002,
        root: './',
        livereload: true
    });
});

gulp.task('html', refresh);

gulp.task('babel', () => {
    gulp.src(['app/**/*.js', 'app/**/*.jsx'])
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015', 'react', 'stage-0']
        }))
        //.pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('browserify', () => {
    const src = browserify({
        entries: "dist",
        debug: true
    });
    return src.bundle()
        .pipe(source("bundle.js"))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest("dist"));
});

gulp.task('refresh', ['browserify'], refresh);

gulp.task('watch', () => {
    gulp.watch(['app/**/*.js', 'app/**/*.jsx'], ['babel']);
    gulp.watch(['app/index.js'], ['refresh']);
    gulp.watch('*.html', ['html']);
});

gulp.task('default', ['connect', 'watch']);