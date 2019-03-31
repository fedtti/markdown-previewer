const gulp = require("gulp");
const babel = require("gulp-babel");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("scripts", () => {
  return gulp.src("./assets/js/*.js")
    .pipe(babel({
      presets: ["@babel/env"]
    }))
    .pipe(gulp.dest("./assets/js/"));
});

gulp.task("styles", () => {
  return gulp.src("./assets/scss/*.scss")
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ["last 2 versions"]
    }))
    .pipe(gulp.dest("./assets/css/"));
});

gulp.task("default", ["scripts", "styles"]);
