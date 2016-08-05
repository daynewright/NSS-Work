module.exports = function(grunt){

    grunt.initConfig({
        jshint: {
            files: ['../javascript/**/*.js']
        },
        watch: {
            javascripts: {
                files: ['../javascripts/**/*.js'],
                tasks: ['jshint']
            }
        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default',['jshint', 'watch']);
};
