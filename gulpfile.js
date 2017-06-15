var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
  livereload = require('gulp-livereload'),
	nano = require('gulp-cssnano'),
	processors = [
		// require('postcss-mixins'),
		// require('postcss-simple-vars'),
		// require('postcss-nested'),
		require('precss'),
		require('autoprefixer')({ browsers: ['last 2 versions', '> 2%'] }),
		require('lost'),
		// require('postcss-font-magician')({
		// 	hosted:'fonts'}),
		// require('postcss-reporter'),
		// require('cssnano')


	];

gulp.task('css', function() {
    return gulp.src(['css/dev/style.css'])
      .pipe(postcss(processors))
			// .pipe(nano())
      .pipe(gulp.dest('css'))
      .pipe(livereload());
});

// gulp.task('reload', function(){
// 	livereload.reloadPage;
// });

gulp.task('default', function() {
  livereload.listen();
  gulp.watch('css/dev/style.css', ['css']);
  gulp.watch('css/dev/_grid.css', ['css']);
  gulp.watch('css/dev/_variables.css', ['css']);


});
