var gulp = require('gulp');
var coffee = require('gulp-coffee');

var paths = {
  scripts: ['../View/*.coffee','../Model/*.coffee','../*.coffee']
};

gulp.task('compile', function(){
	gulp.src(paths.scripts)
	.pipe(coffee())
	.pipe(gulp.dest('../js'));
});

gulp.task('default', ['coffeescript']);