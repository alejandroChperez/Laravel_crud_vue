const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.scripts([              //archivos que se encuentran en reourses/js  (van de orden jerarquico)
    'resources/js/vue.js',
    'resources/js/axios.js',
    'resources/js/app.js'
    ], 'public/js/app.js');
