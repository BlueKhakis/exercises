// load modules
const gulp = require('gulp');

// define functions
function sayHello(done) { // sayHello is the name of the task
    console.log('Hello World'); // this just prints 'Hello world'
    done();
}

// publish HTML files from src to dist
function publishHtml(done) {
    let pipeline = gulp.src('src/**/*.html');

    return pipeline.pipe(gulp.dest('dist'));
}

// export tasks
exports.default = sayHello; // run when running just `gulp`
exports.hello   = sayHello;
exports.build   = publishHtml;