const gulp      = require('gulp'),
  $             = require('gulp-load-plugins')(),
  rimraf        = require('rimraf'),
  webpack       = require('webpack'),
  webpackStream = require('webpack-stream'),
  webpackConfig = require('./webpack.config'),
  browserSync   = require('browser-sync'),
  fs            = require('fs')

gulp.task('clean', () => rimraf.sync('build/**/*'))

gulp.task('pug', () => {

  gulp.src('src/pug/index.pug')
    .pipe($.data(f =>
      ({ data: JSON.parse(fs.readFileSync("./data.json")) })
    ))
    .pipe($.pug({pretty: true}))
    .on('error',e => {})
    .pipe(gulp.dest('./build'))
})

gulp.task('js', () =>
  webpackStream(webpackConfig, webpack)
  .on('error',e => {})
  .pipe(gulp.dest('./build'))
)

gulp.task('scss', () =>
  gulp.src('./src/scss/style.scss')
  .pipe($.plumber())
  .pipe($.sass())
  .pipe($.autoprefixer())
  .pipe(gulp.dest('./build'))
)

gulp.task('res',() => {
  gulp.src('./res/**/*')
    .pipe(gulp.dest('./build'))
})

gulp.task('default', ['clean','pug','js','scss','res'], () => {})

gulp.task('watch', ['default'], () => {
// browserSync({
//    server: {baseDir: 'build'},
//    port: 3000
//  })

//  gulp.watch('./build/**/*',() => browserSync.reload())
//  gulp.watch('./build/*',() => browserSync.reload())
  gulp.watch('./src/scss/*',['scss'])
  gulp.watch(['./src/pug/*','./data.json'] ,['pug'])
  gulp.watch('./src/js/*'  ,['js'])
})
