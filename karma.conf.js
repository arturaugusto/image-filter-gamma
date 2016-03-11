module.exports = function(config) {
    config.set({
        singleRun: true,
        
        frameworks: ['mocha', 'browserify'],

        files: [
            './src/*.js',
            './tests/*.js'
        ],

        preprocessors: {
            './tests/*.js': ['browserify'],
            './src/*.js': ['browserify']
        },

        reporters: ['mocha', 'coverage'],

        plugins: [
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-phantomjs-launcher',
            'karma-coverage',
            'karma-browserify'
        ],

        coverageReporter: {
            type: 'html', //produces a html document after code is run
            dir: 'coverage/' //path to created html doc
        },

        browserify: {
            debug: true,
            transform: [ 'brfs' ]
        },

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],

        // see what is going on
        logLevel: 'LOG_DEBUG',
    });
};
