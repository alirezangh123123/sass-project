import gulp from "gulp";
import gulpSass from "gulp-sass";
import nodeSass from "node-sass";
import sassglob from "gulp-sass-glob";
import rename from "gulp-rename";
import compress from "gulp-uglify";
import imagemin from "gulp-imagemin";
import cssclean from "gulp-clean-css";
import prefix from "gulp-autoprefixer";
const sass = gulpSass(nodeSass);
// task for sass-compiler and move to dist folder
// gulp.task("sass", async function () {
//   return gulp
//     .src([
//       "src/scss/main-porject/*.scss",
//       "src/scss/base/*.scss",
//       "!src/scss/abstracts-and-main/main.scss",
//     ])
//     .pipe(prefix({ cascade: false }))
//     .pipe(sassglob())
//     .pipe(sass())
//     .pipe(rename({ extname: ".css" }))
//     .pipe(gulp.dest("dist/assest/css"));
// });
// task for compress js file
gulp.task("compressjs", async function () {
  return gulp
    .src("src/js/*.js")
    .pipe(compress())
    .pipe(rename({ extname: "-min.js" }))
    .pipe(gulp.dest("dist/assest/js"));
});
// task for minify image
gulp.task("imagemin", async function () {
  return gulp
    .src("src/img/*.*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/assest/img"));
});
// gulp for minify css file
// gulp.task("css-min", async function () {
//   gulp
//     .src("src/css/*.*")
//     .pipe(cssclean())
//     .pipe(rename({ extname: "-min.css" }))
//     .pipe(gulp.dest("dist/assest/css"));
// });
// task for copy *.html file to dist folder to push on server or github
gulp.task("copyhtml", async function () {
  gulp.src("index.html").pipe(gulp.dest("dist"));
});
// make a watch task for auto apply
gulp.task("watch", async function () {
  // gulp.watch("src/css/*.css", gulp.series("css-min"));
  gulp.watch("src/img/*", gulp.series("imagemin"));
  gulp.watch("*.html", gulp.series("copyhtml"));
  gulp.watch("src/js/*.js", gulp.series("compressjs"));
  // gulp.watch(
  //   [
  //     "src/scss/base/*.scss",
  //     "src/scss/main-porject/*.scss",
  //     "!src/scss/abstracts-and-main/*.scss",
  //   ],
  //   gulp.series("sass")
  // );
});
