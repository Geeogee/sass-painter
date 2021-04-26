let mix = require('laravel-mix');
mix
    .sass('src/style.scss', 'css/')
    .setPublicPath('dist')
    .copy('src/index.html', 'dist')
;