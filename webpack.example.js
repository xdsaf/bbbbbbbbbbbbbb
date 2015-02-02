module.exports = {
  context: __dirname + '/examples',
  entry: ['./index.jsx'],
  output: {
    path: __dirname + '/examples/__build__/',
    filename: 'app.js',
    publicPath: '/__build__/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'jsx-loader?insertPragma=React.DOM&harmony'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
