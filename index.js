'use strict';

var path = require('path');

exports.config = function (options, cwd) {
    var defaultQuery = {};
    var babelPlugins = ['transform-class-properties', 'transform-decorators-legacy'];

    if(this.webpack.version && this.webpack.version >= 2) {
        defaultQuery = {
            cacheDirectory: true,
            presets: [
                ['es2015', {loose: true, modules: false}],
                'es2017',
                'stage-0'
            ],
            plugins: babelPlugins
        }
    } else {
        defaultQuery = {
            cacheDirectory: true,
            presets: [
                ['es2015', {loose: true, modules: 'commonjs'}],
                'es2017',
                'stage-0'
            ],
            plugins: babelPlugins
        }
    }

    var baseConfig = this.config;
    extend(true, baseConfig, {
        module: {
            loaders: baseConfig.module.loaders.concat([{
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                loader: require.resolve('babel-loader') +
                        '?presets[]=es2015,presets[]=es2017,presets[]=stage-0!' +
                        require.resolve('ts-loader')
            }])
        }
    });

    baseConfig.entryExtNames.js.push('.ts', '.tsx')
    baseConfig.resolve.extensions.push('.ts', '.tsx')
};
