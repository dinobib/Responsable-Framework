module.exports = function(grunt)
{
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sourceDir: 'src',
        buildDir: 'assets',

        sass: {
            options: {
                style: 'expanded'
            },
            dist: {
                files: { '<%= buildDir %>/css/style.css': '<%= sourceDir %>/scss/style.scss' }
            }
        },

        watch: {
            styles: {
                files: ['<%= sourceDir %>/scss/*.scss'],
                tasks: ['build']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['sass']);
};