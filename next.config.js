const webpack = require('webpack');

module.exports = {
    trailingSlash: true,
    images: {
        domains: ['localhost', 'gpsplenamente.com.br', 'gps.letscomunica.com.br'],
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }))
        return config;
    }
}