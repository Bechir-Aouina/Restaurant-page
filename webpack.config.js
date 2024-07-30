const { watch } = require('fs');
const path=require('path');
module.exports={
  entry:'./src/src.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  devtool:'source-map',
  mode:'development',
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader','css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
      use:[
        {
          loader:'file-loader',
          options:{
            name:'[name].[ext]',
            outputPath:'img/'
          }
        }
      ]
        
      }
    ]
  },
  watch:true,
  
}