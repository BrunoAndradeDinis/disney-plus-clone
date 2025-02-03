const gulp = require('gulp')
const sass = require('gulp-sass')(require("sass"))

function styles(){
  console.log("Compilando o sass")
  return gulp.src('./src/styles/*.scss')
  .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
  .pipe(gulp.dest('./dist/src/css'))
}

exports.default = styles;
exports.watch = ()=>{
  gulp.watch('./src/styles/*.scss', gulp.parallel(styles))

}