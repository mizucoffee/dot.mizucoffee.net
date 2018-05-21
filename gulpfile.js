const gulp      = require('gulp'),
  $             = require('gulp-load-plugins')(),
  rimraf        = require('rimraf'),
  webpack       = require('webpack'),
  webpackStream = require('webpack-stream'),
  webpackConfig = require('./webpack.config'),
  browserSync   = require('browser-sync')

gulp.task('clean', () => rimraf.sync('build/**/*'))

gulp.task('pug', () => {
  gulp.src('src/pug/index.pug')
    .pipe($.pug({pretty: true}))
    .pipe(gulp.dest('./build'))
})

gulp.task('js', () =>
  webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest('./build'))
)

gulp.task('scss', () =>
  gulp.src('./src/scss/style.scss')
    .pipe($.plumber())
    .pipe($.sass())
    .pipe($.autoprefixer())
    .pipe(gulp.dest('./build'))
)

gulp.task('default', ['clean','pug','js','scss'], () => {})

gulp.task('watch', ['default'], () => {
  browserSync({
    server: {baseDir: 'build'},
    port: 3000
  })

  gulp.watch('./build/**/*',() => browserSync.reload())
  gulp.watch('./src/scss/*',['scss'])
  gulp.watch('./src/pug/*' ,['pug'])
  gulp.watch('./src/js/*'  ,['js'])
})
