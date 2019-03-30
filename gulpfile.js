const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const babel = require("gulp-babel");

gulp.task("styles", () => {
  return gulp.src("./assets/scss/*.scss")
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ["last 2 versions"]
    }))
    .pipe(gulp.dest("./assets/css/"));
});

gulp.task("default", () => {

});
