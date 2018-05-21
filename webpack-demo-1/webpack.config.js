/**
 * Created by x1c on 2018/4/8.
 */
const path = require('path');
module.exports = {
    entry : './src/app.js',
    output:{
        path : path.resolve(__dirname,'dist'),
        filename : 'main.js'
    }
}

