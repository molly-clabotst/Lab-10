// Telling the vue dev server where the express sever is
module.exports = {
    devServer:{
        proxy: 'http://127.0.0.1:3000'
    }
}