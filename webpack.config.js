const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
//console.log(ExtractTextPlugin);
module.exports = {
   entry: './js/Myrouter.js',
   output: {
      filename: 'bundle.js'
   },
   module: {
     
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
               cacheDirectory: true,
               presets: [
                     'react',
                     'es2015'
               ]
            }
         },
         {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css'
          
        )
        // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
      },{
      test: /\.(scss|sass)$/,
      loader: ExtractTextPlugin.extract('style', ['css', 'postcss', 'sass']),
    },{
        test: /\.svg$/,
        loader: 'file',
        query: {
            name: '[name].svg'
          //name: 'static/media/[name].[hash:8].[ext]'
        }
      }
         
      ]
   },
   externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    jquery: 'jQuery',
  },
   resolve: {
      extensions: ['', '.js', '.jsx']
   },
    plugins: [
    new ExtractTextPlugin("styles.css"),
    //new UglifyJSPlugin(),
  ]
}
