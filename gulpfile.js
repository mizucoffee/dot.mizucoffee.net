const gulp      = require('gulp'),
  $             = require('gulp-load-plugins')(),
  rimraf        = require('rimraf'),
  webpack       = require('webpack'),
  webpackStream = require('webpack-stream'),
  webpackConfig = require('./webpack.config'),
  browserSync   = require('browser-sync'),
  sass = require('gulp-sass')(require('sass')),
  fs            = require('fs')

const clean = done => rimraf('build/**/*', [], done)

const compilePug = () =>
  gulp.src('src/pug/index.pug')
    .pipe($.data(f =>
      ({ data: JSON.parse(fs.readFileSync("./subdomains.json")) })
    ))
    .pipe($.pug({pretty: true}))
    .on('error',e => {})
    .pipe(gulp.dest('./build'))


const compileJs = () =>
  webpackStream(webpackConfig, webpack)
    .on('error',e => {})
    .pipe(gulp.dest('./build'))

const compileScss = () =>
  gulp.src('./src/scss/style.scss')
    .pipe($.plumber())
    .pipe(sass())
    .pipe($.autoprefixer())
    .pipe(gulp.dest('./build'))


const copyResource = () =>
  gulp.src('./res/**/*')
    .pipe(gulp.dest('./build'))

exports.default = gulp.series(clean, compilePug, compileJs, compileScss, copyResource)

gulp.task('watch', gulp.task('default'), () => {
// browserSync({
//    server: {baseDir: 'build'},
//    port: 3000
//  })

//  gulp.watch('./build/**/*',() => browserSync.reload())
//  gulp.watch('./build/*',() => browserSync.reload())
  gulp.watch('./src/scss/*',gulp.task('scss'))
  gulp.watch(['./src/pug/*','./data.json'] ,gulp.task('pug'))
  gulp.watch('./src/js/*'  ,gulp.task('js'))
  return
})
