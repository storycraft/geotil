module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'index.min.js',
    },
    mode: 'production',
    plugins: [
        
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|tests)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: []
                    }
                }
            }
        ]
    }
};
