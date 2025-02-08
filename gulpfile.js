const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require('gulp-imagemin')

function styles() {
  console.log("Compilando o sass");
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("./dist/src/css"));
}

// Comprimindo as imagens
function images() {
  return gulp
    .src("./src/images/**/*", { encoding: false })
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"));
}

exports.default = gulp.parallel(styles, images);
exports.watch = () => {
  gulp.watch("./src/styles/*.scss", gulp.parallel(styles));
};
