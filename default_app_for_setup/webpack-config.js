module.exports = {
    devtool: 'source-map',
    entry: "./app.tsx",
    mode: "development",
    output: {
        filename: "./app-bundle.js",
        devtoolModuleFilenameTemplate: '[resource-path]'  // removes the webpack:/// prefix
        /*
         * 
         This development-only setting enables debugging in Visual Studio. By default, webpack references in 
         the source map file include the webpack:/// prefix, which prevents Visual Studio from finding the 
         source file app.tsx. This setting overrides the generated references in the source map file, app-bundle.js.map, 
         when building the app. Specifically, this setting changes the reference to the source file 
         from webpack:///./app.tsx to ./app.tsx, which enables debugging.

         */
    },
    resolve: {
        extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    }
}
/*
 Add webpack configuration code to webpack-config.js.
 You add a simple webpack configuration that specifies an input file, app.tsx, and an output file, app-bundle.js,
 for bundling and transpiling JSX to plain JavaScript. For transpiling, you also configure some TypeScript compiler options.
 This basic configuration code is an introduction to webpack and the TypeScript compiler.
 */